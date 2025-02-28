#!/bin/bash
# Author: Valeriy Grachev (refactored by ChatGPT)
# Contact via Telegram: @spelendora

set -e
set -o pipefail

REMOTE_HOST="ubuntu@75.101.174.115"

# -----------------------------------------------------------------------------
# Timing & ANSI Color Codes
# -----------------------------------------------------------------------------
START_TIME=$(date +%s)

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# -----------------------------------------------------------------------------
# SSH Options
# -----------------------------------------------------------------------------
SSH_OPTS="-o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -o LogLevel=ERROR"

# -----------------------------------------------------------------------------
# Exit Trap: Print elapsed time on exit
# -----------------------------------------------------------------------------
trap 'EXIT_STATUS=$?; END_TIME=$(date +%s); ELAPSED=$((END_TIME - START_TIME)); \
MINUTES=$((ELAPSED / 60)); SECONDS=$((ELAPSED % 60)); \
if [ $EXIT_STATUS -ne 0 ]; then \
  echo -e "${RED}[!] Deployment failed after ${MINUTES} min and ${SECONDS} sec!${NC}"; \
else \
  echo -e "${GREEN}[+] Deployment completed successfully on remote machine in ${MINUTES} min and ${SECONDS} sec!${NC}"; \
fi' EXIT

# -----------------------------------------------------------------------------
# Usage & Argument Parsing
# -----------------------------------------------------------------------------
usage() {
  echo -e "${YELLOW}Usage: $0 [--all] [--backend-only] [--frontend-only]${NC}"
  exit 1
}

# By default, deploy both backend and frontend
DEPLOY_BACKEND=true
DEPLOY_FRONTEND=true

while [[ "$#" -gt 0 ]]; do
  case $1 in
    --backend-only)
      DEPLOY_FRONTEND=false
      ;;
    --frontend-only)
      DEPLOY_BACKEND=false
      ;;
    --all)
      DEPLOY_BACKEND=true
      DEPLOY_FRONTEND=true
      ;;
    *)
      echo -e "${RED}Unknown parameter passed: $1${NC}"
      usage
      ;;
  esac
  shift
done

echo -e "${GREEN}DISCURS-MEDIA DEPLOYMENT SCRIPT${NC}"
echo -e "${GREEN}Usage: $0 [--all] [--backend-only] [--frontend-only]${NC}"
echo ""

# -----------------------------------------------------------------------------
# Local Preflight Checks
# -----------------------------------------------------------------------------
check_local_requirements() {
  echo -e "${YELLOW}[*] Checking local requirements...${NC}"
  for cmd in ssh rsync; do
    if ! command -v "$cmd" >/dev/null 2>&1; then
      echo -e "${RED}[!] Required command '$cmd' is not installed. Please install it and retry.${NC}"
      exit 1
    fi
  done
  echo -e "${GREEN}[+] Local preflight checks passed.${NC}"
}
check_local_requirements

# -----------------------------------------------------------------------------
# Define Remote Host & Helper
# -----------------------------------------------------------------------------

echo -e "${YELLOW}[*] Checking SSH connectivity to ${REMOTE_HOST}...${NC}"
if ! ssh $SSH_OPTS -q -o BatchMode=yes -o ConnectTimeout=5 "$REMOTE_HOST" exit; then
  echo -e "${RED}[!] Unable to connect to ${REMOTE_HOST}. Check your SSH configuration.${NC}"
  exit 1
fi

remote() {
  ssh $SSH_OPTS "$REMOTE_HOST" "$@"
}

# -----------------------------------------------------------------------------
# Remote Preflight: OS, apt, Docker, Node.js & Java Checks
# -----------------------------------------------------------------------------
echo -e "${YELLOW}[*] Running remote preflight checks on ${REMOTE_HOST}...${NC}"
remote bash -s <<'EOF'
set -e
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${YELLOW}[*] Verifying Ubuntu with apt...${NC}"
if [ -f /etc/os-release ]; then
  . /etc/os-release
  if [[ "$ID" != "ubuntu" ]]; then
    echo -e "${RED}[!] This script requires Ubuntu. Detected: $NAME${NC}"
    exit 1
  fi
else
  echo -e "${RED}[!] Cannot determine OS. /etc/os-release not found.${NC}"
  exit 1
fi
echo -e "${GREEN}[+] Ubuntu confirmed.${NC}"

if ! command -v apt >/dev/null 2>&1; then
  echo -e "${RED}[!] apt is not available on this system.${NC}"
  exit 1
fi

echo -e "${YELLOW}[*] Checking Docker installation...${NC}"
if ! command -v docker >/dev/null 2>&1; then
  echo -e "${YELLOW}[i] Docker not found. Installing Docker...${NC}"
  sudo apt update -y
  curl -fsSL https://get.docker.com -o install-docker.sh
  sudo sh install-docker.sh
  rm install-docker.sh
else
  echo -e "${GREEN}[+] Docker is installed.${NC}"
fi

echo -e "${YELLOW}[*] Ensuring Docker is running...${NC}"
attempt=1
max_attempts=3
while [ $attempt -le $max_attempts ]; do
  if docker info > /dev/null 2>&1; then
    echo -e "${GREEN}[+] Docker is running.${NC}"
    break
  else
    echo -e "${YELLOW}[i] Docker not running. Attempt $attempt of $max_attempts...${NC}"
    sudo systemctl start docker || true
    sleep 5
  fi
  attempt=$((attempt+1))
done

if ! docker info > /dev/null 2>&1; then
  echo -e "${YELLOW}[i] Docker still not running. Adding user $(whoami) to docker group...${NC}"
  sudo usermod -aG docker $(whoami)
  newgrp docker <<'EON'
if ! docker info > /dev/null 2>&1; then
  echo -e "\033[0;31m[!] Error: Docker failed to start after refreshing group membership.${NC}"
  exit 1
fi
EON
fi

# ---- Node.js Installation ----
echo -e "${YELLOW}[*] Checking Node.js installation...${NC}"
if command -v node >/dev/null 2>&1; then
  NODE_VERSION=$(node -v | sed 's/v//')
else
  NODE_VERSION="none"
fi
DESIRED_NODE="16.14.2"
if [ "$NODE_VERSION" != "$DESIRED_NODE" ]; then
  echo -e "${YELLOW}[i] Current Node.js version is $NODE_VERSION. Installing nvm and Node.js $DESIRED_NODE...${NC}"
  if [ ! -d "$HOME/.nvm" ]; then
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
  else
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
  fi
  nvm install $DESIRED_NODE
  nvm use $DESIRED_NODE
else
  echo -e "${GREEN}[+] Node.js $NODE_VERSION detected.${NC}"
fi

# ---- Java Installation ----
echo -e "${YELLOW}[*] Checking Java installation...${NC}"
if command -v java >/dev/null 2>&1; then
  JAVA_VERSION=$(java -version 2>&1 | awk -F[\".] '/version/ {print $2}')
else
  JAVA_VERSION="none"
fi
if [ "$JAVA_VERSION" != "11" ]; then
  echo -e "${YELLOW}[i] Java version is $JAVA_VERSION. Installing OpenJDK 11...${NC}"
  sudo apt update -y
  sudo apt install -y openjdk-11-jdk
else
  echo -e "${GREEN}[+] Java 11 detected.${NC}"
fi
EOF

echo -e "${YELLOW}[*] Re-testing Docker in new SSH session...${NC}"
if ! ssh $SSH_OPTS "$REMOTE_HOST" docker info > /dev/null 2>&1; then
  echo -e "${RED}[!] Docker is still not running. Exiting.${NC}"
  exit 1
fi

# -----------------------------------------------------------------------------
# Prepare Remote Directory
# -----------------------------------------------------------------------------
REMOTE_USER=$(echo "$REMOTE_HOST" | cut -d'@' -f1)
echo -e "${YELLOW}[*] Ensuring /opt/discurs-media exists on remote host...${NC}"
ssh $SSH_OPTS "$REMOTE_HOST" "sudo mkdir -p /opt/discurs-media && sudo chown ${REMOTE_USER}:${REMOTE_USER} /opt/discurs-media"

# -----------------------------------------------------------------------------
# File Synchronization
# -----------------------------------------------------------------------------
echo -e "${YELLOW}[*] Syncing files to remote machine...${NC}"
rsync -azv -e "ssh $SSH_OPTS" --progress docker-compose.yaml "$REMOTE_HOST:/opt/discurs-media/"
rsync -azv -e "ssh $SSH_OPTS" --progress ops/ "$REMOTE_HOST:/opt/discurs-media/ops/"

if [ "$DEPLOY_BACKEND" = true ]; then
  echo -e "${YELLOW}[*] Syncing backend files (excluding pgdata)...${NC}"
  rsync -azv -e "ssh $SSH_OPTS" --progress --exclude 'pgdata' backend/ "$REMOTE_HOST:/opt/discurs-media/backend/"
fi

if [ "$DEPLOY_FRONTEND" = true ]; then
  echo -e "${YELLOW}[*] Syncing frontend files (excluding node_modules)...${NC}"
  rsync -azv -e "ssh $SSH_OPTS" --progress --exclude 'node_modules' frontend/ "$REMOTE_HOST:/opt/discurs-media/frontend/"
fi
echo -e "${GREEN}[+] File synchronization completed.${NC}"

# -----------------------------------------------------------------------------
# Remote Build Process
# -----------------------------------------------------------------------------
echo -e "${YELLOW}[*] Starting remote build process...${NC}"
remote "DEPLOY_BACKEND=${DEPLOY_BACKEND} DEPLOY_FRONTEND=${DEPLOY_FRONTEND} bash -s" <<'EOF'
set -e
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Build backend if enabled and directory exists
if [ "$DEPLOY_BACKEND" = "true" ]; then
  if [ -d "/opt/discurs-media/backend" ]; then
    echo -e "${YELLOW}[*] Building backend with Gradle...${NC}"
    cd /opt/discurs-media/backend
    chmod +x gradlew
    ./gradlew --stop || true
    ./gradlew build
    echo -e "${GREEN}[+] Backend build completed.${NC}"
  else
    echo -e "${RED}[!] Backend directory not found. Skipping backend build.${NC}"
  fi
fi

# Build frontend if enabled and directory exists
if [ "$DEPLOY_FRONTEND" = "true" ]; then
  if [ -d "/opt/discurs-media/frontend" ]; then
    echo -e "${YELLOW}[*] Building frontend with npm...${NC}"
    cd /opt/discurs-media/frontend
    npm install --force
    npm run build
    echo -e "${GREEN}[+] Frontend build completed.${NC}"
  else
    echo -e "${RED}[!] Frontend directory not found. Skipping frontend build.${NC}"
  fi
fi
EOF

# -----------------------------------------------------------------------------
# Deploy with Docker Compose
# -----------------------------------------------------------------------------
echo -e "${YELLOW}[*] Starting services using Docker Compose on remote machine...${NC}"
remote "cd /opt/discurs-media && docker compose -f docker-compose.yaml build && docker compose -f docker-compose.yaml up -d --force-recreate"

echo -e "${YELLOW}[*] Waiting 3 seconds for containers to stabilize...${NC}"
sleep 3

# -----------------------------------------------------------------------------
# Check Container Status
# -----------------------------------------------------------------------------
echo -e "${YELLOW}[*] Checking status of all containers...${NC}"
remote bash -s <<'EOF'
set -e
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

FAILED=0
cd /opt/discurs-media
CONTAINERS=$(docker compose -f docker-compose.yaml ps -q)

for CONTAINER in $CONTAINERS; do
  STATUS=$(docker inspect -f "{{.State.Status}}" "$CONTAINER")
  if [ "$STATUS" != "running" ]; then
    FAILED=1
    echo -e "${RED}###############################################${NC}"
    echo -e "${RED}[!] Container $CONTAINER is not running (status: $STATUS).${NC}"
    echo -e "${RED}Last 50 lines of logs for container $CONTAINER:${NC}"
    echo -e "${RED}-----------------------------------------------${NC}"
    docker logs --tail 50 "$CONTAINER"
    echo -e "${RED}-----------------------------------------------${NC}"
    echo -e "${RED}###############################################${NC}"
  fi
done

if [ "$FAILED" -eq 1 ]; then
  echo -e "${RED}ERROR: One or more containers failed to start properly. Please review the logs above.${NC}"
  exit 1
else
  echo -e "${GREEN}[+] All containers are running successfully.${NC}"
fi
EOF


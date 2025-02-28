FROM bellsoft/liberica-openjdk-alpine-musl:11

WORKDIR /app

COPY ./build/libs/yacht-0.0.1-SNAPSHOT.jar /app/main.jar

EXPOSE 8080

CMD echo "Starting backend" && \
    java ${JAVA_OPTS} -Djava.security.egd=file:/dev/./urandom -jar /app/main.jar

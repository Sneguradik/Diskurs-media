import { Pipe, PipeTransform } from '@angular/core';
import { IUserViewBase } from '@api/schemas/user/user-view-base.interface';

@Pipe({
  name: 'personName'
})
export class PersonNamePipe implements PipeTransform {
  transform(value: { firstName: string; lastName: string; company?: IUserViewBase['info']['company'] }): string {
    let result: string;
    if (value.company && value.company.isCompany && value.company.confirmed) {
      result = value.company.name ? `${ value.company.name }` : '';
    } else {
      result = `${ value.firstName } ${ value.lastName }`;
    }
    return result;
  }
}

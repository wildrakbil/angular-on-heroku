import { IdentificationTypeCode } from './IdentificationTypeCode';

export class Person {
  id: Number;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  identification: Number;
  identificationTypeCode: IdentificationTypeCode;
}

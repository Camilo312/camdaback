import { generalInterface } from './general.interface';

export interface Client extends generalInterface {
  name: string;
  dni: string;
  empresName: string;
}

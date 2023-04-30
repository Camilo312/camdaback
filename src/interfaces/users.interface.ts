import { generalInterface } from './general.interface';

export interface User extends generalInterface {
  id: number;
  email: string;
  password: string;
  company: string;
  userName: string;
}

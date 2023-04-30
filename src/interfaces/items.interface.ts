import { generalInterface } from './general.interface';

export interface Items extends generalInterface {
  id: number;
  name: string;
  amount: number;
  attributes: string;
  description: string;
  value: number;
}

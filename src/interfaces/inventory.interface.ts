import { generalInterface } from './general.interface';

export interface Inventory extends generalInterface {
  id: number;
  name: string;
  description: string;
}

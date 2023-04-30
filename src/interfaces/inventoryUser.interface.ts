import { generalInterface } from './general.interface';

export interface InventoryUser extends generalInterface {
  id: number;
  idInventory: number;
  idUser: number;
}

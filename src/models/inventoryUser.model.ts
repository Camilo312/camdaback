import { InventoryUser } from '@/interfaces/inventoryUser.interface';
import { ModelContainer } from '@/utils/model';
import { DataTypes, Model, Sequelize } from 'sequelize';

export class InvetoryUserModel extends Model implements InventoryUser {
  id: number;
  idInventory: number;
  idUser: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

ModelContainer.addModel('InventoryUser', InvetoryUserModel);

export default function (sequelize: Sequelize): typeof InvetoryUserModel {
  InvetoryUserModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      idInventory: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      idUser: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: 'inventory_user',
      sequelize,
    },
  );

  return InvetoryUserModel;
}

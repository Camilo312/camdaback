import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { User } from '@interfaces/users.interface';
import { Inventory } from '@/interfaces/inventory.interface';

export type InventoryCreationAttributes = Optional<Inventory, 'id' | 'name' | 'amount' | 'attributes'>;

export class InventoryModel extends Model<Inventory, InventoryCreationAttributes> implements Inventory {
  id: number;
  name: string;
  amount: number;
  attributes: string;
}

export default function (sequelize: Sequelize): typeof InventoryModel {
  InventoryModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      amount: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      attributes: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
    },
    {
      tableName: 'inventory',
      sequelize,
      timestamps: false,
    },
  );

  return InventoryModel;
}

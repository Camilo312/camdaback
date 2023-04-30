import { InventoryItem } from '@/interfaces/inventoryItem.interface';

import { ModelContainer } from '@/utils/model';
import { DataTypes, Model, Sequelize } from 'sequelize';

export class InvetoryItemModel extends Model implements InventoryItem {
  id: number;
  idInventory: number;
  idItem: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

ModelContainer.addModel('InventoryItem', InvetoryItemModel);

export default function (sequelize: Sequelize): typeof InvetoryItemModel {
  InvetoryItemModel.init(
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
      idItem: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: 'inventory_item',
      sequelize,
    },
  );

  return InvetoryItemModel;
}

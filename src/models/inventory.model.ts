import { Inventory } from '@/interfaces/inventory.interface';
import { ModelContainer } from '@/utils/model';
import { DataTypes, Model, Sequelize } from 'sequelize';

export class InventoryModel extends Model implements Inventory {
  id: number;
  name: string;
  description: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

ModelContainer.addModel('Inventory', InventoryModel);

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
      description: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
    },
    {
      tableName: 'inventory',
      sequelize,
    },
  );

  return InventoryModel;
}

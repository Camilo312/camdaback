import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Items } from '@/interfaces/items.interface';
import { ModelContainer } from '@/utils/model';

export class ItemsModel extends Model implements Items {
  id: number;
  name: string;
  amount: number;
  attributes: string;
  description: string;
  value: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

ModelContainer.addModel('Items', ItemsModel);

export default function (sequelize: Sequelize): typeof ItemsModel {
  ItemsModel.init(
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
        type: DataTypes.JSON(),
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      alerts: {
        allowNull: false,
        type: DataTypes.JSON(),
      },
      value: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: 'items',
      sequelize,
    },
  );

  return ItemsModel;
}

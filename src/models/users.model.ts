import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { User } from '@interfaces/users.interface';
import { ModelContainer } from '@/utils/model';

export class UserModel extends Model implements User {
  id: number;
  email: string;
  password: string;
  company: string;
  inventoryId: number;
  userName: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

ModelContainer.addModel('Users', UserModel);

export default function (sequelize: Sequelize): typeof UserModel {
  UserModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      company: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      inventoryId: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      userName: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
    },
    {
      tableName: 'users',
      sequelize,
    },
  );

  return UserModel;
}

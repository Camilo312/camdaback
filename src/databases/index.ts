import Sequelize from 'sequelize';
import { NODE_ENV, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from '@config';
import UserModel from '@models/users.model';
import { logger } from '@utils/logger';
import inventoryUserModel from '@/models/inventoryUser.model';
import ItemsModel from '@/models/items.model';
import InventoryModel from '@/models/inventory.model';
import InvetoryItemModel from '@/models/inventoryItem.model';

const sequelize = new Sequelize.Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  dialect: 'mysql',
  host: DB_HOST,
  port: DB_PORT as unknown as number,
  timezone: '+09:00',
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
    underscored: true,
    freezeTableName: true,
  },
  pool: {
    min: 0,
    max: 5,
  },
  logQueryParameters: NODE_ENV === 'development',
  logging: (query, time) => {
    logger.info(time + 'ms' + ' ' + query);
  },
  benchmark: true,
});

sequelize.authenticate();

const DB = {
  Users: UserModel(sequelize),
  Items: ItemsModel(sequelize),
  InventoryUser: inventoryUserModel(sequelize),
  Inventory: InventoryModel(sequelize),
  InventoryItem: InvetoryItemModel(sequelize),
  sequelize, // connection instance (RAW queries)
  Sequelize, // library
};

DB.InventoryUser.hasOne(DB.Users, { sourceKey: 'idUser', foreignKey: 'id', as: 'user' });
DB.InventoryUser.hasOne(DB.Inventory, { sourceKey: 'idInventory', foreignKey: 'id', as: 'inventory' });
DB.InventoryItem.hasOne(DB.Inventory, { sourceKey: 'idInventory', foreignKey: 'id', as: 'inventoryModel' });
DB.InventoryItem.hasMany(DB.Items, { sourceKey: 'idItem', foreignKey: 'id', as: 'items' });

export default DB;

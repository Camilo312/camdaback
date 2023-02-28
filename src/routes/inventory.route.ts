import { Router } from 'express';
import UsersController from '@controllers/users.controller';
import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import InventoryController from '@/controllers/inventory.controller';
import { CreateInventoryDto } from '@/dtos/inventory.dto';

class InventoryRoute implements Routes {
  public path = '/inventory';
  public router = Router();
  public usersController = new InventoryController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.usersController.getInventory);
    this.router.get(`${this.path}/:id(\\d+)`, this.usersController.getInventoryById);
    this.router.post(`${this.path}`, validationMiddleware(CreateInventoryDto, 'body'), this.usersController.createInventory);
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateInventoryDto, 'body', true), this.usersController.updateInventory);
    this.router.delete(`${this.path}/:id(\\d+)`, this.usersController.deleteInventory);
  }
}

export default InventoryRoute;

import { CreateInventoryDto } from '@/dtos/inventory.dto';
import { Inventory } from '@/interfaces/inventory.interface';
import InventoryService from '@/services/inventory.service';
import { NextFunction, Request, Response } from 'express';

class InventoryController {
  public inventoryService = new InventoryService();

  public getInventory = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllInventoryData: Inventory[] = await this.inventoryService.findAllInventory();

      res.status(200).json({ data: findAllInventoryData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getInventoryById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const InventoryId = Number(req.params.id);
      const findOneInventoryData: Inventory = await this.inventoryService.findInventoryById(InventoryId);

      res.status(200).json({ data: findOneInventoryData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createInventory = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const InventoryData: CreateInventoryDto = req.body;
      const createInventoryData: Inventory = await this.inventoryService.createInventory(InventoryData);

      res.status(201).json({ data: createInventoryData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateInventory = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const InventoryId = Number(req.params.id);
      const InventoryData: CreateInventoryDto = req.body;
      const updateInventoryData: Inventory = await this.inventoryService.updateInventory(InventoryId, InventoryData);

      res.status(200).json({ data: updateInventoryData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteInventory = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const InventoryId = Number(req.params.id);
      const deleteInventoryData: Inventory = await this.inventoryService.deleteInventory(InventoryId);

      res.status(200).json({ data: deleteInventoryData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default InventoryController;

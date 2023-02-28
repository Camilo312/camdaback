import { hash } from 'bcrypt';
import DB from '@databases';
import { CreateInventoryDto } from '@dtos/inventory.dto';
import { HttpException } from '@exceptions/HttpException';
import { Inventory } from '@interfaces/inventory.interface';
import { isEmpty } from '@utils/util';

class InventoryService {
  public Inventory = DB.Inventory;

  public async findAllInventory(): Promise<Inventory[]> {
    const allInventory: Inventory[] = await this.Inventory.findAll();
    return allInventory;
  }

  public async findInventoryById(InventoryId: number): Promise<Inventory> {
    if (isEmpty(InventoryId)) throw new HttpException(400, 'InventoryId is empty');

    const findInventory: Inventory = await this.Inventory.findByPk(InventoryId);
    if (!findInventory) throw new HttpException(409, "Inventory doesn't exist");

    return findInventory;
  }

  public async createInventory(InventoryData: CreateInventoryDto): Promise<Inventory> {
    if (isEmpty(InventoryData)) throw new HttpException(400, 'InventoryData is empty');

    const createInventoryData: Inventory = await this.Inventory.create({ ...InventoryData });
    return createInventoryData;
  }

  public async updateInventory(InventoryId: number, InventoryData: CreateInventoryDto): Promise<Inventory> {
    if (isEmpty(InventoryData)) throw new HttpException(400, 'InventoryData is empty');

    const findInventory: Inventory = await this.Inventory.findByPk(InventoryId);
    if (!findInventory) throw new HttpException(409, "Inventory doesn't exist");

    await this.Inventory.update({ ...InventoryData }, { where: { id: InventoryId } });

    const updateInventory: Inventory = await this.Inventory.findByPk(InventoryId);
    return updateInventory;
  }

  public async deleteInventory(InventoryId: number): Promise<Inventory> {
    if (isEmpty(InventoryId)) throw new HttpException(400, "Inventory doesn't existId");

    const findInventory: Inventory = await this.Inventory.findByPk(InventoryId);
    if (!findInventory) throw new HttpException(409, "Inventory doesn't exist");

    await this.Inventory.destroy({ where: { id: InventoryId } });

    return findInventory;
  }
}

export default InventoryService;

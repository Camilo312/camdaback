import DB from '@/databases';

class ItemsService {
  private items = DB.Items;

  public async findAll(): Promise<any[]> {
    const allElements: any[] = await this.items.findAll({
      include: {
        all: true,
      },
    });
    return allElements;
  }
}

export default ItemsService;

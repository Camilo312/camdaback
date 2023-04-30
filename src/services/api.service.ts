import DB from '@databases';
import { HttpException } from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';

class ApiService {
  public DB = DB;

  public async findAll(model: string, conditions: any = null): Promise<any[]> {
    const selectedModel = DB[model];

    if (isEmpty(selectedModel)) throw new HttpException(400, 'Not model exists');

    const allElements: any[] = await selectedModel.findAll({
      include: {
        all: true,
      },
      where: conditions,
    });
    return allElements;
  }

  public async findById(model: string, conditions: any = null): Promise<any> {
    const selectedModel = DB[model];

    if (isEmpty(selectedModel)) throw new HttpException(400, 'Not model exists');
    if (isEmpty(model)) throw new HttpException(400, 'Not model given');
    if (isEmpty(conditions)) throw new HttpException(400, 'Not primary key given');

    const findElement: any = await selectedModel.findOne({
      include: {
        all: true,
      },
      where: conditions,
    });
    if (!findElement) throw new HttpException(409, "any doesn't exist");

    return findElement;
  }

  public async create(model: string, obj: any): Promise<any> {
    const selectedModel = DB[model];
    if (isEmpty(selectedModel)) throw new HttpException(400, 'Not model exists');
    if (isEmpty(model)) throw new HttpException(400, 'Not model given');
    if (isEmpty(obj)) throw new HttpException(400, 'Not data given');

    const createElement: any = await selectedModel.create(obj);
    return createElement;
  }

  public async update(model: string, obj: any, conditions: any = null): Promise<any> {
    const selectedModel = DB[model];

    if (isEmpty(selectedModel)) throw new HttpException(400, 'Not model exists');
    if (isEmpty(model)) throw new HttpException(400, 'Not model given');
    if (obj instanceof selectedModel) throw new HttpException(400, 'Object is not instance of model');
    if (isEmpty(obj)) throw new HttpException(400, 'Not data given');

    await selectedModel.update(obj, { where: conditions });

    const updateElement: any = await selectedModel.findOne({
      where: conditions,
    });
    return updateElement;
  }

  public async delete(model: string, conditions: any = null): Promise<any> {
    const selectedModel = DB[model];

    if (isEmpty(selectedModel)) throw new HttpException(400, 'Not model exists');
    if (isEmpty(model)) throw new HttpException(400, 'Not model given');
    if (isEmpty(conditions)) throw new HttpException(400, 'Not primary key given');

    const findElement: any = await selectedModel.findOne({
      where: conditions,
    });
    if (!findElement) throw new HttpException(409, "Element doesn't exist");

    await selectedModel.destroy({ where: conditions });

    return findElement;
  }
}

export default ApiService;

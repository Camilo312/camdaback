import { NextFunction, Request, Response } from 'express';
import ApiService from '@/services/api.service';
import { PetitionDTO } from '@/dtos/petition.dto';

class ApiController {
  public apiService = new ApiService();

  public getMultiple = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const petition = req.body as PetitionDTO;
      const findAll: any[] = await this.apiService.findAll(petition.model, petition.conditions);

      res.status(200).json({ data: findAll, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const petition = req.body as PetitionDTO;
      const findOne: any = await this.apiService.findById(petition.model, petition.conditions);

      res.status(200).json({ data: findOne, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const petition = req.body as PetitionDTO;
      const createElement: any = await this.apiService.create(petition.model, petition.data);

      console.log(createElement.dataValues);
      console.log(createElement.dataValues.id);
      console.log(createElement.id);

      res.status(201).json({ data: createElement, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const petition = req.body as PetitionDTO;
      const updateElement: any = await this.apiService.update(petition.model, petition.data, petition.conditions);

      res.status(200).json({ data: updateElement, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const petition = req.body as PetitionDTO;
      const deleteElement: any = await this.apiService.delete(petition.model, petition.conditions);

      res.status(200).json({ data: deleteElement, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default ApiController;

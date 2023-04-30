import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import ApiController from '@/controllers/api.controller';
import { PetitionDTO } from '@/dtos/petition.dto';
import valdiateModel from '@/middlewares/modelValidation.middleware';

class ApiRoute implements Routes {
  public path = '/api';
  public router = Router();
  public apiController = new ApiController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/findAll`, validationMiddleware(PetitionDTO, 'body'), this.apiController.getMultiple);
    this.router.post(`${this.path}/findOne`, validationMiddleware(PetitionDTO, 'body'), this.apiController.getOne);
    this.router.post(`${this.path}/create`, [validationMiddleware(PetitionDTO, 'body'), valdiateModel()], this.apiController.create);
    this.router.put(`${this.path}/update`, validationMiddleware(PetitionDTO, 'body'), this.apiController.update);
    this.router.delete(`${this.path}/delete`, validationMiddleware(PetitionDTO, 'body'), this.apiController.delete);
  }
}

export default ApiRoute;

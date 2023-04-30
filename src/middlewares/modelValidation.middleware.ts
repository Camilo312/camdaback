import { PetitionDTO } from '@/dtos/petition.dto';
import { ModelContainer } from '@/utils/model';

import { NextFunction, Request, RequestHandler, Response } from 'express';

const valdiateModel = (): RequestHandler => {
  return (req, res, next) => {
    try {
      const { model, data } = req.body as PetitionDTO;

      const modelSelected = ModelContainer.getModel(model);
      const missingElementsList = [];
      const unrequieredElementsList = [];

      Object.keys(modelSelected.rawAttributes).reduce((acc, key) => {
        if (data[key]) {
          acc++;
        } else {
          missingElementsList.push(key);
        }
        return acc;
      }, 0);

      Object.keys(data).reduce((acc, key) => {
        if (modelSelected.rawAttributes[key]) {
          acc++;
        } else {
          unrequieredElementsList.push(key);
        }
        return acc;
      }, 0);

      let errors = 0;
      let msg = '';

      if (missingElementsList.length > 3) {
        errors++;
        const missingProperties = missingElementsList.filter(property => property !== 'createdAt' && property !== 'updatedAt' && property !== 'id');
        msg = `The model ${model} does not have the properties: ${missingProperties.join(', ')} `;
      }

      if (unrequieredElementsList.length > 0) {
        errors++;
        const unrequieredProperties = unrequieredElementsList.filter(
          property => property !== 'createdAt' && property !== 'updatedAt' && property !== 'id',
        );
        msg += `The model ${model} does not requiere the properties: ${unrequieredProperties.join(', ')}`;
      }
      if (errors > 0) {
        throw new Error(msg);
      }
      next();
    } catch (error) {
      next(error);
    }
  };
};

export default valdiateModel;

import ApiRoute from '../routes/api.route';
import request from 'supertest';
import App from '../app';
import bcrypt from 'bcrypt';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Create a register from a generic table, case inventory', () => {
  describe('[POST] /api/create', () => {
    it('response statusCode 200 /api/create to create a inventory register', async () => {
      const apiRoute = new ApiRoute();

      const petitionObject = {
        model: 'Inventory',
        data: {
          id: 659,
          name: 'Test',
          amount: 15,
          attributes: 'azul',
        },
      };

      const app = new App([apiRoute]);
      return request(app.getServer()).post(`${apiRoute.path}/create`).send(petitionObject).expect(201);
    });
  });
});

describe('Create a register from a generic table, case users', () => {
  describe('[POST] /api/create', () => {
    it('response statusCode 200 /api/create to create a user register', async () => {
      const apiRoute = new ApiRoute();

      const petitionObject = {
        model: 'Users',
        data: {
          id: 659,
          userName: 'TestUser',
          email: 'mailtest@mailtest.com',
          password: '123456',
          company: 'TestCompany',
          inventoryId: 659,
        },
      };

      const app = new App([apiRoute]);
      return request(app.getServer()).post(`${apiRoute.path}/create`).send(petitionObject).expect(201);
    });
  });
});

describe('Get all registers for diferent tables, case inventory table', () => {
  describe('[POST] /api/findall', () => {
    it('response statusCode 200 /api/findall to get all inventory', async () => {
      const apiRoute = new ApiRoute();
      const app = new App([apiRoute]);

      const petitionObject = {
        model: 'Inventory',
        data: null,
      };

      return request(app.getServer()).post(`${apiRoute.path}/findall`).send(petitionObject).expect(200);
    });
  });
});

describe('Get all registers for diferent tables, case users table', () => {
  describe('[POST] /api/findall', () => {
    it('response statusCode 200 /api/findall to get all users', async () => {
      const apiRoute = new ApiRoute();
      const app = new App([apiRoute]);

      const petitionObject = {
        model: 'Users',
        data: null,
      };

      return request(app.getServer()).post(`${apiRoute.path}/findall`).send(petitionObject).expect(200);
    });
  });
});

describe('Get one register from a generic table, case inventory', () => {
  describe('[POST] /api/findOne', () => {
    it('response statusCode 200 /api/findOne to get a user from given id', async () => {
      const apiRoute = new ApiRoute();

      const petitionObject = {
        model: 'Inventory',
        data: {
          id: 659,
        },
      };

      const app = new App([apiRoute]);
      return request(app.getServer()).post(`${apiRoute.path}/findOne`).send(petitionObject).expect(200);
    });
  });
});

describe('Get one register from a generic table, case users', () => {
  describe('[POST] /api/findOne', () => {
    it('response statusCode 200 /api/findOne to get a user from given id', async () => {
      const apiRoute = new ApiRoute();

      const petitionObject = {
        model: 'Users',
        data: {
          id: 659,
        },
      };

      const app = new App([apiRoute]);
      return request(app.getServer()).post(`${apiRoute.path}/findOne`).send(petitionObject).expect(200);
    });
  });
});

describe('Update a register from a generic table, case inventory', () => {
  describe('[POST] /api/update', () => {
    it('response statusCode 200 /api/update to update a inventory register', async () => {
      const apiRoute = new ApiRoute();

      const petitionObject = {
        model: 'Inventory',
        data: {
          id: 659,
          name: 'Test',
          amount: 15,
          attributes: 'Rojo',
        },
      };

      const app = new App([apiRoute]);
      return request(app.getServer()).put(`${apiRoute.path}/update`).send(petitionObject).expect(200);
    });
  });
});

describe('Update a register from a generic table, case users', () => {
  describe('[POST] /api/update', () => {
    it('response statusCode 200 /api/update to update a user register', async () => {
      const apiRoute = new ApiRoute();

      const petitionObject = {
        model: 'Users',
        data: {
          id: 659,
          userName: 'TestUser',
          email: 'updatetest@mail.com',
        },
      };

      const app = new App([apiRoute]);
      return request(app.getServer()).put(`${apiRoute.path}/update`).send(petitionObject).expect(200);
    });
  });
});

describe('Delete a register from a generic table, case users', () => {
  describe('[POST] /api/delete', () => {
    it('response statusCode 200 /api/delete to delete a user register', async () => {
      const apiRoute = new ApiRoute();

      const petitionObject = {
        model: 'Users',
        data: {
          id: 659,
        },
      };

      const app = new App([apiRoute]);
      return request(app.getServer()).delete(`${apiRoute.path}/delete`).send(petitionObject).expect(200);
    });
  });
});

describe('Delete a register from a generic table, case inventory', () => {
  describe('[POST] /api/delete', () => {
    it('response statusCode 200 /api/delete to delete a inventory register', async () => {
      const apiRoute = new ApiRoute();

      const petitionObject = {
        model: 'Inventory',
        data: {
          id: 659,
        },
      };

      const app = new App([apiRoute]);
      return request(app.getServer()).delete(`${apiRoute.path}/delete`).send(petitionObject).expect(200);
    });
  });
});

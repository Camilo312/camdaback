import AuthRoute from '../routes/auth.route';
import request from 'supertest';
import App from '../app';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing singup', () => {
  describe('[POST] /signup', () => {
    it('response statusCode 201 /signup', async () => {
      const authRoute = new AuthRoute();
      const app = new App([authRoute]);

      const userData = {
        userName: 'TestUser',
        email: 'prueba2@prueba2.com',
        password: '123456',
        company: 'TestCompany',
      };

      return request(app.getServer()).post(`${authRoute.path}signup`).send(userData).expect(201);
    });
  });
});

describe('Testing Login', () => {
  describe('[POST] /login', () => {
    it('response setcookie from login', async () => {
      const authRoute = new AuthRoute();
      const app = new App([authRoute]);

      const userData = {
        email: 'prueba@prueba.com',
        password: '123456',
      };

      return request(app.getServer())
        .post(`${authRoute.path}login`)
        .send(userData)
        .expect('Set-Cookie', /^Authorization=.+/);
    });
  });
});

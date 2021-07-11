import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { SequelizeHealthIndicator } from '@nestjs/terminus';
import { User } from '@db/models/user';

import * as request from 'supertest';
import { AppModule } from '../../src/app/app.module';

jest.mock('@db/models/user');

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(SequelizeHealthIndicator)
      .useValue({ pingCheck: () => Promise.resolve({ database: { status: 'up' } }) })
      .compile();

    jest.spyOn(User, 'findOne').mockReturnValue(
      Promise.resolve({
        username: 'admin',
        password: '$2b$10$jkzR/NI9PCgA3UXhx5T6WOqPJkzhTGAJY/5Z0txIfRt57ThjqfSOe',
      } as User),
    );

    app = moduleFixture.createNestApplication();

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('/health (GET)', () => {
    it('responds with json', async () => {
      const response = await request(app.getHttpServer()).get('/health');

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        status: 'ok',
        info: { database: { status: 'up' } },
        error: {},
        details: { database: { status: 'up' } },
      });
    });
  });

  describe('/login (POST)', () => {
    it('responds with success', async () => {
      const response = await request(app.getHttpServer()).post('/login').send({ username: 'admin', password: 'admin' });

      expect(response.status).toBe(201);
    });

    it('responds with unauthorized', async () => {
      const response = await request(app.getHttpServer()).post('/login').send({ username: 'admin', password: 'bad' });

      expect(response.status).toBe(401);
    });
  });

  describe('/refresh (POST)', () => {
    it('responds with success', async () => {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' +
        '.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTYyNjAxNjUyOCwiZXhwIjoxOTQxMzc2NTI4fQ.' +
        '_zgERajHtONErUyEejoV53zysRxcUuHaHvZTIt6xgPA';

      const response = await request(app.getHttpServer()).post('/refresh').set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(201);
    });

    it('responds with unauthorized', async () => {
      const response = await request(app.getHttpServer()).post('/refresh');

      expect(response.status).toBe(401);
    });
  });
});

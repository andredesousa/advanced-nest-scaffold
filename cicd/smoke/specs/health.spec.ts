import { GenericContainer, StartedTestContainer, Wait } from 'testcontainers';
import * as request from 'supertest';

describe('Smoke Testing', () => {
  let container: StartedTestContainer;
  let baseUrl: string;

  beforeAll(async () => {
    container = await new GenericContainer('nestjs:latest')
      .withExposedPorts(3000)
      .withWaitStrategy(Wait.forLogMessage(/Nest application successfully started/gm))
      .start();

    baseUrl = `http://localhost:${container.getMappedPort(3000)}`;
  });

  afterAll(async () => {
    await container.stop();
  });

  it('works', async () => {
    const response = await request(baseUrl).get('/health');

    expect(response.status).toBe(503);
    expect(response.body).toEqual({
      status: 'error',
      info: {},
      error: { database: { status: 'down' } },
      details: { database: { status: 'down' } },
    });
  });
});

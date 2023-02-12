require('dotenv').config();
const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../../src/v1/app');

beforeEach(async () => {
  await mongoose.set('strictQuery', true).connect(process.env.DATABASE_URL);
});

afterEach(async () => {
  await mongoose.connection.close();
});

describe('POST /api/v1/banner/create', () => {
  it('should return 201 and message', async () => {
    const res = await request(app)
      .post('/api/v1/banner/create')
      .send({
        img_path: 'foo.jpg',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message');
    expect(res.body).toHaveProperty('data');
  });
});

describe('GET /api/v1/banner/all', () => {
  it('should return 200 and message', async () => {
    const res = await request(app)
      .get('/api/v1/banner/all');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message');
    expect(res.body).toHaveProperty('data');
  });
})

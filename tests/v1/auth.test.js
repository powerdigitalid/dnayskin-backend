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

describe('POST /register', () => {
  it('should return 201 and message', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'user2',
        password: 'password2',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message');
  });
});
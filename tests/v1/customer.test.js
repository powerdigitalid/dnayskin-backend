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

describe('POST /api/v1/customer/create', () => {
  it('should return 201 and message', async () => {
    const res = await request(app)
      .post('/api/v1/customer/create')
      .send({
        cust_name: 'foo',
        cust_phone: '081234567890',
        cust_address: 'foo',
        cust_img: 'foo.jpg',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message');
    expect(res.body).toHaveProperty('data');
  });
});

describe('GET /api/v1/customer/all', () => {
  it('should return 200 and message', async () => {
    const res = await request(app)
      .get('/api/v1/customer/all');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message');
    expect(res.body).toHaveProperty('data');
  });
});

describe('PUT /api/v1/customer/:id', () => {
  it('should return 200 and message', async () => {
    const res = await request(app)
      .put('/api/v1/customer/1')
      .send({
        cust_name: 'foo',
        cust_phone: '081234567890',
        cust_address: 'foo',
        cust_img: 'foo.jpg',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message');
    expect(res.body).toHaveProperty('data');
  });
});

describe('DELETE /api/v1/customer/:id', () => {
  it('should return 200 and message', async () => {
    const res = await request(app)
      .delete('/api/v1/customer/1');
    expect(res.statusCode).toEqual(204);
    expect(res.body).toHaveProperty('message');
    expect(res.body).toHaveProperty('data');
  });
});

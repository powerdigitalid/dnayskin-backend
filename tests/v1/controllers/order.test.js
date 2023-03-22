require('dotenv').config();
const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../../../src/v1/app');

beforeEach(async () => {
  await mongoose.set('strictQuery', true).connect(process.env.DATABASE_URL);
});

afterEach(async () => {
  await mongoose.connection.close();
});

describe('POST /api/v1/order/create', () => {
  it('should return 201, data, and message', async () => {
    const res = await request(app)
      .post('/api/v1/order/create')
      .send({
        order_date: "2023-03020",
        order_desc: "-",
        order_detail: [
          {
            orderId: "d34db33f",
            treatmentId: "b33fb33f",
            productId: "d34dd34d",
            quantity: 1,
            price: 90000
          },
          {
            orderId: "d34db33f",
            treatmentId: "b33fb33f",
            productId: "d34dd34d",
            quantity: 1,
            price: 90000
          },
          {
            orderId: "d34db33f",
            treatmentId: "b33fb33f",
            productId: "d34dd34d",
            quantity: 1,
            price: 90000
          },
        ]
      })
  });
});
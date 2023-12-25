// productController.test.ts
import request from 'supertest'
import express,{Application} from 'express';
import productroutes from '../controllers/productcontroller';
import {describe, expect, test} from '@jest/globals';
import { beforeEach } from 'node:test';

describe('Product Routes', () => {
  let app: Application;

  beforeEach(() => {
    app = express();
    app.use('/products', productroutes);
  });

  test('POST /products should add a new product and return 201 status', async () => {
    const response = await request(app)
      .post('/products')
      .send({ name: 'Test Product', description: 'Test Description' });

    expect(response.status).toBe(201);
  });

  test('GET /products/getallproducts should return all products', async () => {
    const response = await request(app).get('/products/getallproducts');
    expect(response.status).toBe(200);
  });
});

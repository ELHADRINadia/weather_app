const request = require('supertest');
const app = require('../index');
const User = require('../models/user');

describe('Register controller', () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  it('should successfully register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/signup')
      .send({
        name: 'nadia',
        email: 'nadia@example.com',
        password: 'nadia@ycd'
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should return an error if the user already exists', async () => {
    await User.create({
      name: 'nadia',
      email: 'nadia@example.com',
      password: 'nadia@ycd'
    });

    const res = await request(app)
      .post('/api/auth/signup')
      .send({
        name: 'nadia',
        email: 'nadia@example.com',
        password: 'nadia@ycd'
      });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('msg', 'User already exists');
  });
});

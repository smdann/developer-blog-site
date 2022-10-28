const { User } = require('../models');

const userData = [
  {
    name: 'Augustine',
    email: 'augustine@test.com',
    password: '1',
  },
  {
    name: 'Laura',
    email: 'laura@test.com',
    password: 'password1234',
  },
  {
    name: 'Robert',
    email: 'rob@test.com',
    password: 'password12345',
  },
  {
    name: 'Thomas',
    email: 'tom@test.com',
    password: 'password123456',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
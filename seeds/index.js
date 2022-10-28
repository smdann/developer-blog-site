const sequelize = require('../config/connection');
const seedComments = require('./commentData');
const seedPosts = require('./postData');
const seedUsers = require('./userData')

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUsers();
  console.log('\n----- Users SEEDED -----\n');
  
  await seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');
  
  await seedComments();
  console.log('\n----- Comments SEEDED -----\n');

  process.exit(0);
};

seedAll();
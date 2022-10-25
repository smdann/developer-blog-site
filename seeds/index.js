const sequelize = require('../config/connection');
const seedDashboard = require('./dashboardData');
const seedPosts = require('./postData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedDashboard();
  console.log('\n----- DASHBOARD SEEDED -----\n');
  
  await seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
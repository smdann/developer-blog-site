const User = require('./User');
const Dashboard = require('./Dashboard');
const Post = require('./Post');

Dashboard.hasMany(Post, {
  foreignKey: 'gallery_id',
});

Post.belongsTo(Dashboard, {
  foreignKey: 'gallery_id',
});

module.exports = { User, Dashboard, Post };
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

// Define columns
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    contents: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Post',
  }
);

module.exports = Post;
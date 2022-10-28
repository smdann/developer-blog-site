const { Post } = require('../models');

const postData = [
  {
    title: 'Why MVC is so important',
    user_id: 1,
    date_created: 'March 30, 2018',
    content: "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
  },
  {
    title: 'Authentication vs. Authorization',
    user_id: 2,
    date_created: 'April 17, 2018',
    content: "There is a difference between authentication and authorization. Authentication means confirming your own identity,whereas authorization means being allowed access to the system.",
  },
  {
    title: 'Obiect-Relational Mapping',
    user_id: 3,
    date_created: 'March 30, 2018',
    content: "I have really loved learning about ORMs. It's really simplified the way I create queries in SQL!",
  },
  
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
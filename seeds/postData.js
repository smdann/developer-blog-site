const { Post } = require('../models');

const postData = [
  {
    title: 'Why MVC is so important',
    author: 'LedyX',
    date_created: 'March 30, 2018',
    // gallery_id: 1,
    contents: "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
  },
  {
    title: 'Why MVC is so important',
    author: 'LedyX',
    date_created: 'March 30, 2018',
    // gallery_id: 1,
    contents: "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
  },
  {
    title: 'Why MVC is so important',
    author: 'LedyX',
    date_created: 'March 30, 2018',
    // gallery_id: 1,
    contents: "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
  },
  {
    title: 'Why MVC is so important',
    author: 'LedyX',
    date_created: 'March 30, 2018',
    // gallery_id: 1,
    contents: "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
  },
  {
    title: 'Why MVC is so important',
    author: 'LedyX',
    date_created: 'March 30, 2018',
    // gallery_id: 1,
    contents: "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
  },
  {
    title: 'Why MVC is so important',
    author: 'LedyX',
    date_created: 'March 30, 2018',
    // gallery_id: 1,
    contents: "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
  },
  {
    title: 'Why MVC is so important',
    author: 'LedyX',
    date_created: 'March 30, 2018',
    // gallery_id: 1,
    contents: "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
  },
  {
    title: 'Why MVC is so important',
    author: 'LedyX',
    date_created: 'March 30, 2018',
    // gallery_id: 1,
    contents: "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
  },
  {
    title: 'Why MVC is so important',
    author: 'LedyX',
    date_created: 'March 30, 2018',
    // gallery_id: 1,
    contents: "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
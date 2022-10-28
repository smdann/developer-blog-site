const { Comment } = require('../models');

const commentData = [
  {
    user_id: 1,
    post_id: 2,
    date_created: 'June 21, 2022 17:00:00',
    content: 'Great article.',
  },
  {
    user_id: 2,
    post_id: 3,
    date_created: 'August 22, 2022 17:00:00',
    content: 'Thank you for sharing!',
  },
  {
    user_id: 3,
    post_id: 4,
    date_created: 'September 23, 2022 17:00:00',
    content: 'This was very informative.',
  },
  {
    user_id: 4,
    post_id: 1,
    date_created: 'October 24, 2022 17:00:00',
    content: 'This helped me learn a lot about the topic.',
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
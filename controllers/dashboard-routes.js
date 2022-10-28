const router = require('express').Router();
const { Comment, Post, User } = require('../models');
const withAuth = require('../utils/auth');

// GET all posts that belong to the user (user_id matches session.user_id)
router.get('/', withAuth, (req, res) => {
  Post.findAll({
    where: {user_id: req.session.user_id},
    
    attributes: ['title', 'date_created', 'content'],
    include: [
      {
        model: Comment,
        attributes: ['date_created', 'content'],
      },
    ],
})
  .then(dbPostData => {
    const posts = dbPostData.map(post => post.get({ plain: true }));

    res.render('dashboard', {
      posts, loggedIn: true
    });
  })
  .catch(err => {
    console.log(err);
    res.redirect('login')
    res.status(500).json(err);
  });
});

// GET one post that belongs to the user (user_id matches session.user_id)
// router.get('/posts/:id', withAuth, async (req, res) => {
//   try {
//     const Post.findAll({
//     where: {user_id: req.session.user_id},
    
//     attributes: ['title', 'date_created', 'content'],
//     include: [
//       {
//         model: Comment,
//         attributes: ['date_created', 'content'],
//       },
//     ],
// })
//   .then(dbPostData => {
//     const posts = dbPostData.map(post => post.get({ plain: true }));

//     res.render('dashboard', {
//       posts,
//     });
//   })
//   .catch(err => {
//     console.log(err);
//     res.redirect('login')
//     res.status(500).json(err);
//   });
// });

module.exports = router;
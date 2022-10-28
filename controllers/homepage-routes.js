const router = require('express').Router();
const { Comment, Post, User } = require('../models');

// GET all posts for the homepage
router.get('/', async (req, res) => {
  try {
    const allPosts = await Post.findAll({
      include: [User]
    })
    const dbPostData = allPosts.map((post) => post.get({plain: true}))
    console.log(dbPostData, req.session.user_id);
    res.render('homepage', {dbPostData, user_id: req.session.user_id})
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// router.get('/', (req, res) => {
//   Post.findAll({
//     include: [
//       {
//         model: Comment,
//         attributes: ['date_created', 'content'],
//       },
//     ],
// })
//   .then(dbPostData => {
//     const posts = dbPostData.map(post => post.get({ plain: true }));

//     res.render('homepage', {
//       posts,
//     });
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// });


// GET one post
router.get('/posts/:id', async (req, res) => {
  try {
    const singlePost = Post.findByPk(req.params.id, 
      {
      include: [{model: User, attributes: {exclude: 'password'}},
      {model: Comment, include: [{model: User, attributes: {exclude: 'password'}}]}]
    })
    if (singlePost) {
      const post = (await singlePost).get({plain: true})
      return res.render('singlePost', {post, user_id: req.session.user_id})
    }
    else {
      res.status(404).end();
    }
  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.get('/posts/:id', (req, res) => {
//   Post.findOne({where: {id: req.params.id}, 
//       include: [
//         {
//           model: Comment,
//           attributes: [
//             'id',
//             'user_id',
//             'post_id',
//             'date_created',
//             'content',
//           ],
//         },
//         {
//           model: User,
//           attributes: [
//             'name',
//           ],
//         },
//       ],
//     })

//     .then(dbPostData => {
//       const posts = dbPostData.map(post => post.get({ plain: true }));
  
//       res.render('post', {
//         posts,
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
    
    
// });

// Get Login
router.get('/login', (req, res) => {
  if(req.session.loggedIn) {
    res.redirect('/dashboard')
  }
  res.render('login')
});

// Get Sign-up
router.get('/signup', (req, res) => {
  if(req.session.loggedIn) {
    res.redirect('/dashboard')
  }
  res.render('signup')
});

module.exports = router;
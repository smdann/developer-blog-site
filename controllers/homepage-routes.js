const router = require('express').Router();
const { Comment, Post, User } = require('../models');

// GET all posts for the homepage
router.get('/', async (req, res) => {
  try {
    const allPosts = await Post.findAll({
      include: [User]
    })
    // Serializes the data
    const dbPostData = allPosts.map((post) => post.get({plain: true}))
    console.log(dbPostData, req.session.user_id);
    // Passes the serialized data into homepage.handlars
    res.render('homepage', {dbPostData, loggedIn: req.session.loggedIn})
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one post
router.get('/posts/:id', async (req, res) => {
  try {
    const singlePost = Post.findByPk(req.params.id, {
      // Include User and Comment models
      include: [{model: User, attributes: {exclude: 'password'}},
      {model: Comment, include: [{model: User, attributes: {exclude: 'password'}}]}]
    })
    // Render singlePost.handlebars
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

// Get Login
router.get('/login', (req, res) => {
  if(req.session.loggedIn) {
    // If already logged in, redirects to the dashboard
    res.redirect('/dashboard')
  }
  // If not logged in, renders login.handlebars
  res.render('login')
});

// Get Sign-up
router.get('/signup', (req, res) => {
  // If already logged in, redirects to the dashboard
  if(req.session.loggedIn) {
    res.redirect('/dashboard')
  }
  // If not logged in, renders signup.handlebars
  res.render('signup')
});

module.exports = router;
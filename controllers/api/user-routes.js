const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// Create a new user (sign up)
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new login (login)
router.post('/login', (req, res) => {
    console.log("from login", req.body)
    // Find user in db with email address matching the one entered
    User.findOne({
      where: {
        email: req.body.email,
        
      },
    }) .then(userData => {
      console.log(!userData)
      if (!userData) {
        res.status(400).json({ message: 'No account found with the email you provided. Please sign up.' });
        return;
      }
      // Validate the password entered with the one in the db
      const validPassword = userData.checkPassword(req.body.password);
      console.log(validPassword)
      console.log(userData)
      console.log(req.body.password)

      if(!validPassword) {
        res.status(400).json({ message: 'You entered an invalid passowrd. Please try again.' });
        return;
      }
      // Session saved with user ID
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.loggedIn = true;

        res.json({user: userData, message: 'You are now logged in.'});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    });
  });
});

// Create a new logout (logout)
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    // Destroys the user's session
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

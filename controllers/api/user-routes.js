const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// Create a new user (sign up)
router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.email = userData.email;
      req.session.loggedIn = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Create a new login (login)
router.post('/login', (req, res) => {
    console.log("from login", req.body)
    User.findOne({
      where: {
        email: req.body.email,
      },
    }) .then(userData => {
      console.log(userData)
      if (!userData) {
        res.status(400).json({ message: 'No account found with the email you provided. Please sign up.' });
        return;
      }
      const validPassword = userData.checkPassword(req.body.password);
      console.log(validPassword)
      console.log(userData)
      console.log(req.body.password)

      if(!validPassword) {
        res.status(400).json({ message: 'No account found with the email you provided. Please sign up.' });
        return;
      }
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.email = userData.email;
        req.session.loggedIn = true;

        res.json({user: userData, message: 'You are now logged in.'});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    });
  });
});

//     console.log(userData, '@@')

//     if (!userData) {
//       res
//         .status(400)
//         .json({ message: 'No account found with the email you provided. Please sign up.' });
//       return;
//     }
//     console.log(userData, '@@@')
//     const validPassword = userData.checkPassword(req.body.password);
//     console.log(validPassword, '@@@@@@@@@@@@')

//     if (!validPassword) {
//       console.log('password not validated')
//       res
//         .status(400)
//         .json({ message: 'The password you entered is incorrect. Please try again.' });
//       return;
//     }

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.email = userData.email;
//       req.session.loggedIn = true;

//       res.json(userData);
//       console.log(userData, '***********************')
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// Create a new logout (logout)
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

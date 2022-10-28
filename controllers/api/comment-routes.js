const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Authorized user adds a comment
router.post('/', withAuth, async (req, res) => {
  try {
    const addComment = await Comment.create({
      content: req.body.content,
      post_id: req.body.post_id,
      user_id: req.session.user_id,
    })
    res.status(200).json(addComment)
  } catch(err) {
    res.status(400).json(err)
  }
});


module.exports = router;
const router = require('express').Router();
const { User, Post } = require('../../models');
const withAuth = require('../../utils/auth');

// Authorized user creates a new post
router.post('/', withAuth, async (req, res) => {
  const postBody = req.body;
  console.log(postBody);

  const createPost = await Post.create({
      ...postBody,
      user_id: req.session.user_id
    })
    res.status(200).json(createPost);
  //   } catch(err) {
  //   res.status(400).json(err)
  // }
  });

// Authorized user edits their post
router.put('/:id', withAuth, async (req, res) => {
  try {
    const updatePost = await Post.update(req.body, {
      where: {id: req.params.id}
    })
    res.status(200).json(updatePost)
  } catch(err) {
    res.status(400).json(err)
  }
});

// Authorized user deletes their post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deletePost = await Post.destroy({
      where: {id: req.params.id}
    })
    res.status(200).json(deletePost)
  } catch(err) {
    res.status(400).json(err)
  }
});

module.exports = router;
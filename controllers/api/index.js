const router = require('express').Router();

const commentRoutes = require('./comment-routes.js');
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');

router.use('/comments', commentRoutes);
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;

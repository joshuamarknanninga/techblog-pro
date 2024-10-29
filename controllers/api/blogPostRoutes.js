const router = require('express').Router();
const { withAuth } = require('../../utils/auth'); // Make sure to destructure it correctly
const blogService = require('../../services/blogService');

// POST a new blog post
router.post('/', withAuth, async (req, res) => {
  try {
    const newBlogPost = await blogService.createBlogPost(req.body, req.session.user_id);
    res.status(200).json(newBlogPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

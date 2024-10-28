// blogPostRoutes.js
const router = require('express').Router();
const { BlogPost } = require('../../models');
const withAuth = require('../../utils/auth');
const blogService = require('../../services/blogService'); // New Service

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

// controllers/api/commentRoutes.js

const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../middleware/auth');

// POST /api/comments - Create a new comment
router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      comment_text: req.body.comment_text,
      post_id: req.body.post_id,
      user_id: req.session.user_id,
    });

    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

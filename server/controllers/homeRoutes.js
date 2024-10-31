// homeRoutes.js
const router = require('express').Router();
const { BlogPost, User } = require('../models');
const auth = require('../utils/auth');

// Delegate data fetching to service or helper
const fetchData = async () => {
  return await BlogPost.findAll({
    include: [
      {
        model: User,
        attributes: ['name'],
      },
    ],
  });
};

router.get('/', async (req, res) => {
  try {
    const blogData = await fetchData();
    const posts = blogData.map((post) => post.get({ plain: true }));
    res.render('home', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

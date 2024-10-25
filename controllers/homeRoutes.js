// controllers/homeRoutes.js

const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET homepage
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User }],
      order: [['createdAt', 'DESC']],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('home', { 
      title: 'Home',
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// GET dashboard (protected route)
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userPosts = await Post.findAll({
      where: { user_id: req.session.user_id },
      include: [{ model: User }],
    });

    const posts = userPosts.map((post) => post.get({ plain: true }));

    res.render('dashboard', { 
      title: 'Dashboard',
      posts, 
      logged_in: true 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// GET login page
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the dashboard
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login', { title: 'Login' });
});

// GET signup page
router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect to the dashboard
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('signup', { title: 'Sign Up' });
});

module.exports = router;

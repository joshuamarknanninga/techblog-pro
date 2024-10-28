// auth.js
const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

// New utility for verifying session tokens
const verifySessionToken = (token) => {
  // Logic to verify session token and return boolean
  return true;
};

module.exports = { withAuth, verifySessionToken };

const { BlogPost } = require('../models');

const createBlogPost = async (postData, userId) => {
  const newBlogPost = await BlogPost.create({
    ...postData,
    user_id: userId,
  });
  return newBlogPost;
};

module.exports = {
  createBlogPost,
};

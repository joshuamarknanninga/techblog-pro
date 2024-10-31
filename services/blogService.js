const { BlogPost } = require('../server/models');

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

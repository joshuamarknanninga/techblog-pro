// seeds/seed.js
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
const postData = require('./postData.json'); // Ensure this path is correct

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synced!');

    // Create Users with all required fields
    const users = await User.bulkCreate(
      [
        {
          name: 'Alice Smith',
          email: 'alice@example.com',
          password: 'password123',
        },
        {
          name: 'Bob Johnson',
          email: 'bob@example.com',
          password: 'password123',
        },
      ],
      {
        individualHooks: true, // Ensures password hashing
        returning: true,
      }
    );

    // Create Posts using postData
    const posts = await Post.bulkCreate(postData, {
      individualHooks: true, // If you have hooks for Post model
      returning: true,
    });

    // Create Comments (Optional: Create a commentData.json or define comments here)
    // const commentData = require('./commentData.json'); // If using a separate file
    await Comment.bulkCreate([
      {
        comment_text: 'Great post!',
        user_id: users[1].id,
        post_id: posts[0].id,
      },
      {
        comment_text: 'Thanks for sharing.',
        user_id: users[0].id,
        post_id: posts[1].id,
      },
    ]);

    console.log('Seeding completed!');
    process.exit(0);
  } catch (err) {
    console.error('Failed to seed database:', err);
    process.exit(1);
  }
};

seedDatabase();



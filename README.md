# Tech Blog

Tech Blog is a full-stack web application that allows users to publish blog posts, comment on other users' posts, and interact with the community. This project is built using Node.js, Express, Sequelize, and Handlebars. It follows the MVC (Model-View-Controller) architectural pattern and includes user authentication, database handling, and RESTful routes.

## Table of Contents

1. [Demo](#demo)
2. [Features](#features)
3. [Technologies](#technologies)
4. [Prerequisites](#prerequisites)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Folder Structure](#folder-structure)
8. [Database Schema](#database-schema)
9. [API Endpoints](#api-endpoints)
10. [Contributing](#contributing)
11. [License](#license)

## Demo

Link to the live demo: [Demo URL](#)

## Features

- User authentication (sign up, login, and logout)
- Users can create, edit, and delete blog posts
- Commenting on blog posts
- Responsive design using CSS
- RESTful API with CRUD operations for posts and comments
- MVC architecture for clear separation of concerns
- Secure routes for authenticated users using session handling

## Technologies

- **Backend**:
  - Node.js
  - Express.js
  - Sequelize (ORM for MySQL)
  - MySQL (Database)
  - Handlebars.js (Template engine)
  - Express-session (for session management)
  
- **Frontend**:
  - Handlebars.js
  - HTML, CSS, JavaScript
  
- **Deployment**:
  - Heroku (optional)
  
## Prerequisites

Before running this project, you need to have the following installed:

- [Node.js](https://nodejs.org/) v14 or above
- [MySQL](https://www.mysql.com/) database

## Installation

Follow the steps below to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/techblog-pro.git
   cd techblog-pro

+++markdown
### Set up environment variables:
Create a `.env` file in the root directory with the following content:

    DB_NAME='techblog_db'
    DB_USER='your_mysql_user'
    DB_PASSWORD='your_mysql_password'
    SECRET='super_secret_session_key'

### Create the database:
Log in to MySQL and run the `schema.sql` file to create the database:

    mysql -u root -p
    source db/schema.sql

### Seed the database (optional):
You can seed the database with example data by running the following command:

    npm run seed

### Run the application:
To start the application, run the following command:

    npm start

### Access the application:
Open your browser and go to:

    http://localhost:3001

### Usage
- **Home Page**: Users can view the latest posts.
- **Login/Signup**: Users need to sign up and log in to create posts and comments.
- **Dashboard**: Logged-in users can create and manage their blog posts.
- **Post Details**: Users can view the details of individual posts and leave comments.

### Folder Structure

    ├── config/
    │   ├── config.json      # Database configuration
    │   └── connection.js    # Sequelize connection setup
    ├── controllers/
    │   ├── api/
    │   │   ├── commentRoutes.js  # Routes for comment management
    │   │   ├── postRoutes.js     # Routes for post management
    │   │   └── userRoutes.js     # Routes for user management
    │   ├── homeRoutes.js         # Routes for homepage
    │   └── index.js              # Consolidates routes
    ├── db/
    │   └── schema.sql       # SQL schema to create the database
    ├── models/
    │   ├── Comment.js       # Comment model
    │   ├── Post.js          # Post model
    │   └── User.js          # User model
    ├── public/
    │   ├── css/
    │   │   └── styles.css   # CSS styles for the app
    │   └── js/
    │       ├── signup.js    # JavaScript for signup functionality
    │       └── script.js    # General JavaScript for the app
    ├── seeds/
    │   └── seed.js          # Seed data for the app
    ├── views/
    │   ├── dashboard.handlebars  # View for user dashboard
    │   ├── homepage.handlebars   # View for homepage
    │   ├── login.handlebars      # View for login page
    │   ├── post.handlebars       # View for single post
    │   ├── signup.handlebars     # View for signup page
    │   ├── layouts/
    │   │   └── main.handlebars   # Main layout
    │   └── partials/
    │       └── navigation.handlebars # Partial for navigation
    ├── .gitignore            # Files to ignore in Git
    ├── package.json          # Node.js dependencies
    ├── server.js             # Main server file
    └── README.md             # This file

### Database Schema

The application uses a MySQL database with the following schema:

#### User:
- `id`: Primary key
- `username`: User's name
- `password`: Encrypted password

#### Post:
- `id`: Primary key
- `title`: Title of the blog post
- `content`: Content of the blog post
- `user_id`: Foreign key linked to the user who created the post

#### Comment:
- `id`: Primary key
- `comment_text`: Content of the comment
- `post_id`: Foreign key linked to the post
- `user_id`: Foreign key linked to the user who made the comment

### API Endpoints

#### User Routes:
- `POST /api/users/login`: Log in a user.
- `POST /api/users/logout`: Log out a user.
- `POST /api/users/signup`: Sign up a new user.

#### Post Routes:
- `GET /api/posts`: Retrieve all posts.
- `GET /api/posts/:id`: Retrieve a single post by ID.
- `POST /api/posts`: Create a new post.
- `PUT /api/posts/:id`: Update a post by ID.
- `DELETE /api/posts/:id`: Delete a post by ID.

#### Comment Routes:
- `POST /api/comments`: Create a new comment.

### Contributing

If you'd like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit the changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

### License
This project is licensed under the MIT License. See the `LICENSE` file for more details.
+++
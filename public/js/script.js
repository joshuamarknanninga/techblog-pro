// public/js/script.js

// Handle logout
const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log out.');
    }
  };
  
  document.getElementById('logout')?.addEventListener('click', logout);
  
  // Handle login form
  // const loginFormHandler = async (event) => {
  //   event.preventDefault();
  
  //   const username = document.querySelector('input[name="username"]').value.trim();
  //   const password = document.querySelector('input[name="password"]').value.trim();
  
  //   if (username && password) {
  //     const response = await fetch('/api/users/login', {
  //       method: 'POST',
  //       body: JSON.stringify({ username, password }),
  //       headers: { 'Content-Type': 'application/json' },
  //     });
  
  //     if (response.ok) {
  //       document.location.replace('/');
  //     } else {
  //       alert('Failed to log in.');
  //     }
  //   }
  // };
  
  // document.getElementById('login-form')?.addEventListener('submit', loginFormHandler);
  
  // // Handle signup form
  // const signupFormHandler = async (event) => {
  //   event.preventDefault();
  
  //   const username = document.querySelector('input[name="username"]').value.trim();
  //   const password = document.querySelector('input[name="password"]').value.trim();
  
  //   if (username && password) {
  //     const response = await fetch('/api/users', {
  //       method: 'POST',
  //       body: JSON.stringify({ username, password }),
  //       headers: { 'Content-Type': 'application/json' },
  //     });
  
  //     if (response.ok) {
  //       document.location.replace('/');
  //     } else {
  //       alert('Failed to sign up.');
  //     }
  //   }
  // };
  
  // document.getElementById('signup-form')?.addEventListener('submit', signupFormHandler);
  
  // // Handle comment form
  // const commentFormHandler = async (event) => {
  //   event.preventDefault();
  
  //   const comment_text = document.querySelector('textarea[name="comment_text"]').value.trim();
  //   const post_id = document.querySelector('input[name="post_id"]').value;
  
  //   if (comment_text && post_id) {
  //     const response = await fetch('/api/comments', {
  //       method: 'POST',
  //       body: JSON.stringify({ comment_text, post_id }),
  //       headers: { 'Content-Type': 'application/json' },
  //     });
  
  //     if (response.ok) {
  //       document.location.reload();
  //     } else {
  //       alert('Failed to add comment.');
  //     }
  //   }
  // };
  
  // document.getElementById('comment-form')?.addEventListener('submit', commentFormHandler);
  
  // // Additional handlers for dashboard actions can be implemented similarly
  
module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return new Date(date).toLocaleDateString();
    },
    
    format_plural: (word, amount) => {
      if (amount !== 1) {
        return `${word}s`;
      }
  
      return word;
    },
  
    truncate: (str, len) => {
      if (str.length > len && str.length > 0) {
        let new_str = str + " ";
        new_str = str.substr(0, len);
        new_str = str.substr(0, new_str.lastIndexOf(" "));
        new_str = new_str.length > 0 ? new_str : str.substr(0, len);
        return new_str + "...";
      }
      return str;
    },
  
    strip_tags: (input) => {
      return input.replace(/<(?:.|\n)*?>/gm, '');
    },
  
    edit_icon: (post_user, logged_in, post_id) => {
      if (post_user.id === logged_in.user_id) {
        return `<a href="/post/${post_id}/edit"><i class="fas fa-edit"></i></a>`;
      } else {
        return '';
      }
    }
  };
  
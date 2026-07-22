// Post.js
// A simple class representing a single blog post entity.
// Used to model the shape of data returned from the JSONPlaceholder API.

class Post {
  constructor(id, title, body) {
    this.id = id;
    this.title = title;
    this.body = body;
  }
}

export default Post;

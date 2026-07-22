import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    // Initialize state with an empty list of posts and no error
    this.state = {
      posts: [],
      hasError: false
    };
  }

  // Fetches posts from the JSONPlaceholder API and stores them in state
  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const posts = data.map(
          (item) => new Post(item.id, item.title, item.body)
        );
        this.setState({ posts });
      })
      .catch((error) => {
        // Errors thrown here are handled by componentDidCatch
        this.setState({ hasError: true });
        alert('Error fetching posts: ' + error.message);
      });
  };

  // Lifecycle hook: called immediately after the component is mounted
  // Good place to make network requests to fetch data
  componentDidMount() {
    this.loadPosts();
  }

  // Lifecycle hook: catches JavaScript errors anywhere in the child
  // component tree, logs them, and displays an alert message
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    alert('Something went wrong while rendering posts: ' + error.message);
    console.error('componentDidCatch:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong while loading the posts.</h2>;
    }

    return (
      <div className="posts-container">
        <h1>Blog Posts</h1>
        {this.state.posts.length === 0 ? (
          <p>Loading posts...</p>
        ) : (
          this.state.posts.map((post) => (
            <div key={post.id} className="post">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Posts;

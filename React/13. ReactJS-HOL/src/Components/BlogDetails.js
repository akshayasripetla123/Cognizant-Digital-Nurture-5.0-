import React from 'react';

const blogs = [
  { id: 1, title: 'Getting Started with Hooks', published: true, comments: 12 },
  { id: 2, title: 'Understanding the Virtual DOM', published: true, comments: 5 },
  { id: 3, title: 'Draft: Advanced Redux Patterns', published: false, comments: 0 },
  { id: 4, title: 'Draft: Server Components Deep Dive', published: false, comments: 0 }
];

// Extracted list-item component; the "key" prop is provided by the
// parent's map() call, not inside this component
function BlogItem({ blog }) {
  // CONDITIONAL RENDERING with the ternary operator: choose the status
  // label and its CSS class based on blog.published
  const statusLabel = blog.published ? 'Published' : 'Draft';
  const statusClass = blog.published ? 'status-published' : 'status-draft';

  return (
    <li className="list-item">
      <strong>{blog.title}</strong>{' '}
      <span className={statusClass}>{statusLabel}</span>
      {/* Nested ternary: show comment count only for published posts,
          otherwise show a placeholder */}
      {blog.published ? (
        <span className="comments"> - {blog.comments} comments</span>
      ) : (
        <span className="comments"> - not yet published</span>
      )}
    </li>
  );
}

function BlogDetails() {
  const publishedBlogs = blogs.filter((blog) => blog.published);

  // CONDITIONAL RENDERING with an ELEMENT VARIABLE: build the JSX for
  // the summary line ahead of time using if-else, then render it below
  let summary;
  if (publishedBlogs.length > 0) {
    summary = <p className="info-msg">{publishedBlogs.length} blog(s) published so far.</p>;
  } else {
    summary = <p className="info-msg">No blogs have been published yet.</p>;
  }

  return (
    <div className="section">
      <h2>Blog Details</h2>
      {summary}
      <ul>
        {/* Using map() to render the list of blogs, each with a unique key */}
        {blogs.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;

import React from 'react';
import './App.css';
import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import CourseDetails from './Components/CourseDetails';

function App() {
  return (
    <div className="App">
      <h1>Blogger App</h1>
      {/* Rendering multiple components together on the same page */}
      <BookDetails />
      <BlogDetails />
      <CourseDetails />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  document.title = "carolina baby daddy"

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://api.sheety.co/751c84b27e51cd2b85e8401267fbce1c/personalBlogSheet/blog';
      try {
        const response = await fetch(url);
        const json = await response.json();
        setBlogs(json.blog);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>jayson tatum!!!!</h1>
      <h3>by: chris pondoc</h3>
      <ul>
        {blogs.map((blog) => (
          <div className="image" key={blog.id}>
            <img src={blog.src} height="500"/>
            <p>{blog.caption}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;

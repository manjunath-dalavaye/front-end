// src/components/Blog.tsx
import React from 'react';
import useFetchPosts from '../hooks/useFetchPosts';
import { Post } from '../types/blogTypes';

const Blog: React.FC = () => {
  // Replace with your actual API URL
  const { posts, loading, error } = useFetchPosts('https://api.example.com/posts');

  return (
    <div id="blog">
      <h1>THE BLOG</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;

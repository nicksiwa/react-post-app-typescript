import React, { useState, useEffect } from 'react';
import PostList from './components/posts/PostList';
import { iPostItem } from './types/postTypes';
import { getAllPosts } from './services/post';

function App() {
  const defaultProps: iPostItem[] = [];
  const [posts, setPosts] = useState(defaultProps);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function requestAllPosts() {
      const posts = await getAllPosts();
      setPosts(posts);
      setLoading(false);
    }

    requestAllPosts()
  }, [])

  if (isLoading) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="row m-1">
        <div className="col-sm">
          <button className="btn btn-primary">Create Post</button>
        </div>
      </div>
      <div className="row m-1">
        <div className="col-sm">
          <PostList posts={posts} />
        </div>
      </div>
    </div>
  );
}

export default App;

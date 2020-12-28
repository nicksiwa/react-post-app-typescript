import React from 'react';
import PostItem from './PostItem';
import { iPostList } from '../../types/postTypes';

const PostList: React.FC<iPostList> = props => {
  return (
    <ul className="list-group">
      {props.posts.map(post => (
        <PostItem
          title={post.title}
          body={post.body}
        />
      ))}
    </ul>
  );
}

export default PostList;

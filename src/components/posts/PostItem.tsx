import React from 'react';
import { iPostItem } from '../../types/postTypes';

const PostItem: React.FC<iPostItem> = props => {
  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h3>{props.title}</h3>
          <p className="m-0">{props.body}</p>
        </div>
        <div>
          <button className="btn btn-outline-secondary ms-1">Edit</button>
          <button className="btn btn-outline-danger ms-1">Delete</button>
        </div>
      </div>
    </li>
  );
}

export default PostItem;

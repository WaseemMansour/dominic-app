import React from 'react';
import { Post } from '../types';

type PostItemProps = {
  post: Post;
};

const PostItem: React.FC<PostItemProps> = ({ post }) => (
  <div>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
  </div>
);

export default PostItem;

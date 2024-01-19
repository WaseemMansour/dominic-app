import React from 'react';
import Loading from '../../../app/components/Loading';
import PostForm from '../components/PostForm';
import PostsList from '../components/PostsList';
import { usePosts } from '../hooks/usePosts';

const Posts = () => {
  const {
    data: {
      posts,
      currentPost,
      isLoading,
    },
    handlers: {
      handleSubmit,
      handleEditPost,
      handleDeletePost,
    },
  } = usePosts();

  return (
    <>
      <h1>Dominic Posts</h1>
      {isLoading
        ? <Loading />
        : (
          <>
            <PostForm data={ currentPost } onSubmit={ handleSubmit } />
            <PostsList
              posts={ posts }
              handleEditPost={ handleEditPost }
              handleDeletePost={ handleDeletePost }
            />
          </>
        )}
    </>
  );
};

export default Posts;

import { notification } from 'antd';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Post } from '../types';
import { selectCurrentPost, selectPosts } from '../store/postsSlice';
import {
  useCreatePostMutation,
  useDeletePostMutation,
  useGetPostByIdQuery,
  useGetPostsQuery,
  useUpdatePostMutation
} from '../api';

const usePosts = () => {
  const posts = useSelector(selectPosts);
  const currentPost = useSelector(selectCurrentPost);

  const [deletePost, { isLoading: isDeletePostLoading }] = useDeletePostMutation();
  const [createPost, { isLoading: isCreateLoading }] = useCreatePostMutation();
  const [updatePost, { isLoading: isUpdateLoading }] = useUpdatePostMutation();

  const [postId, setPostId] = useState<number>(0);
  const { isLoading: isGetPostLoading } = useGetPostByIdQuery(postId, { skip: !postId });
  const { isLoading: isGetPostsLoading } = useGetPostsQuery('');

  const handleEditPost = (id: number) => {
    setPostId(id);
  };

  const handleSubmit = async (data: Post) => {
    try {
      if (data.id) {
        await updatePost({
          id: data.id,
          body: data,
        });
      } else {
        await createPost(data);
      }
      notification.success({
        type: 'success',
        message: `Post ${data.id ? 'updated' : 'created'} successfully`,
        placement: 'bottomRight',
      });
      setPostId(() => 0);
    } catch (error) {
      notification.error({
        type: 'error',
        message: 'Something went wrong, please try again!',
        placement: 'bottomRight',
      });
    }
  };

  const handleDeletePost = async (id: number) => {
    try {
      await deletePost(id);
      notification.success({
        type: 'success',
        message: 'Post deleted successfully',
        placement: 'bottomRight',
      });
    } catch (error) {
      notification.error({
        type: 'error',
        message: 'Something went wrong, please try again!',
        placement: 'bottomRight',
      });
    }
  };

  const isLoading = isGetPostsLoading
    || isDeletePostLoading
    || isCreateLoading
    || isUpdateLoading
    || isGetPostLoading;

  return {
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
  };
};

export { usePosts };

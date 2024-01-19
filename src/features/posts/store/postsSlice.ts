import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../../../app/store';
import { Post } from '../types';
import {
  matchPostCreated, matchPostDeleted, matchPostsListReceived, matchPostUpdated, matchSinglePostReceived
} from '../api';

export interface PostsState {
  posts: Post[];
  currentPost: Post;
}

const initialCurrentPost = {
  title: '',
  body: '',
};

const initialState: PostsState = {
  posts: [],
  currentPost: initialCurrentPost,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: async (builder) => {
    builder
      .addMatcher(matchPostsListReceived, (state, action) => {
        state.posts = action.payload;
      })
      .addMatcher(matchPostCreated, (state, action) => {
        state.posts = [
          ...state.posts,
          action.payload
        ];
        state.currentPost = initialCurrentPost;
      })
      .addMatcher(matchSinglePostReceived, (state, action) => {
        state.currentPost = action.payload;
      })
      .addMatcher(matchPostUpdated, (state, action) => {
        state.posts = state.posts.map((post) => {
          const { id, body } = action.meta.arg.originalArgs;
          if (post.id === id) {
            return { ...post, ...body };
          }
          return post;
        });
        state.currentPost = initialCurrentPost;
      })
      .addMatcher(matchPostDeleted, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.meta.arg.originalArgs);
      });
  },
});

export const selectPosts = (state: RootState) => state.posts.posts;
export const selectCurrentPost = (state: RootState) => state.posts.currentPost;

export default postsSlice.reducer;

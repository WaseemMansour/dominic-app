import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { POSTS_API } from '../../../app/api/constants';
import { Post } from '../types';

type UpdatePostParams = {
  id: number,
  body: Post
};

export const postsApiSlice = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    // Queries
    getPosts: builder.query<Post[], string>({ query: () => POSTS_API }),
    getPostById: builder.query<Post, number>({
      query: (id) => `${POSTS_API}/${id}`,
      keepUnusedDataFor: 0, // This should be removed if it's a real api saving data
    }),
    // Mutations
    createPost: builder.mutation({
      query: (body) => ({
        url: POSTS_API,
        method: 'POST',
        body,
      }),
    }),
    updatePost: builder.mutation({
      query: ({ id, body }: UpdatePostParams) => ({
        url: `${POSTS_API}/${id}`,
        method: 'PUT',
        body,
      }),
    }),
    deletePost: builder.mutation({
      query: (id: number) => ({
        url: `${POSTS_API}/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const matchPostsListReceived = postsApiSlice.endpoints?.getPosts.matchFulfilled;
export const matchSinglePostReceived = postsApiSlice.endpoints?.getPostById.matchFulfilled;
export const matchPostCreated = postsApiSlice.endpoints?.createPost.matchFulfilled;
export const matchPostUpdated = postsApiSlice.endpoints?.updatePost.matchFulfilled;
export const matchPostDeleted = postsApiSlice.endpoints?.deletePost.matchFulfilled;

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useUpdatePostMutation,
  useCreatePostMutation,
  useDeletePostMutation,
} = postsApiSlice;

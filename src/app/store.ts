import {
  configureStore, ThunkAction, Action
} from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import postsReducer from '../features/posts/store/postsSlice';
import { postsApiSlice } from '../features/posts/api';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    [postsApiSlice.reducerPath]: postsApiSlice.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;

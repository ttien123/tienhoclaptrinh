import { configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/dist/query';
import blogReducer from './pages/blog.slice';
import { blogApi } from './pages/blog.service';

export const store = configureStore({
    reducer: { blog: blogReducer, [blogApi.reducerPath]: blogApi.reducer },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(blogApi.middleware);
    },
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

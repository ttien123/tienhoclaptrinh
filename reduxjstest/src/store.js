import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './pages/blog/blog.slice';
import { blogApi } from './pages/blog/blog.service';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
    reducer: { blog: blogReducer, [blogApi.reducerPath]: blogApi.reducer },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(blogApi.middleware);
    },
});

setupListeners(store.dispatch);

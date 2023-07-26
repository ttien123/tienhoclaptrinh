import { createSlice } from '@reduxjs/toolkit';

import { initialPostList } from '../../constants/blog';

const initialState = {
    postId: '',
};

export const blogSlice = createSlice({
    name: 'blog',
    initialState: initialState,
    reducers: {
        startEditPost: (state, action) => {
            state.postId = action.payload;
        },
        cancelEditPost: (state) => {
            state.postId = '';
        },
    },
});

export const { startEditPost, cancelEditPost } = blogSlice.actions;

const blogReducer = blogSlice.reducer;
export default blogReducer;

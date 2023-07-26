import { AsyncThunk, PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Post } from 'types/blog.type';
import http from 'utils/http';

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

interface BlogState {
    postList: Post[];
    editingPost: Post | null;
    loading: boolean;
    loadingAddPost: boolean;
    currentRequestId: undefined | string;
}

const initalState: BlogState = {
    postList: [],
    editingPost: null,
    loading: false,
    loadingAddPost: false,
    currentRequestId: undefined,
};

export const getPostList = createAsyncThunk('blog/getPostList', async (_, thunkApi) => {
    const response = await http.get<Post[]>('posts/', {
        signal: thunkApi.signal,
    });
    return response.data;
});

export const addPost = createAsyncThunk('blog/addPost', async (body: Omit<Post, 'id'>, thunkApi) => {
    const response = await http.post<Post>('posts/', body, {
        signal: thunkApi.signal,
    });
    return response.data;
});

export const updatePost = createAsyncThunk(
    'blog/updatePost',
    async ({ postId, body }: { postId: string; body: Post }, thunkApi) => {
        try {
            const response = await http.put<Post>(`posts/${postId}`, body, {
                signal: thunkApi.signal,
            });
            return response.data;
        } catch (error: any) {
            if (error.name === 'AxiosError' && error.response.status === 422) {
                return thunkApi.rejectWithValue(error.response.data);
            }
            throw error;
        }
    },
);

export const deletePost = createAsyncThunk('blog/deletePost', async (postId: string, thunkApi) => {
    const response = await http.delete<Post>(`posts/${postId}`, {
        signal: thunkApi.signal,
    });

    return response.data;
});

const blogSlice = createSlice({
    name: 'blog',
    initialState: initalState,
    reducers: {
        startEditingPost: (state, action: PayloadAction<string>) => {
            const postId = action.payload;
            const foundPost = state.postList.find((post) => post.id === postId) || null;
            state.editingPost = foundPost;
        },

        cancelEditingPost: (state) => {
            state.editingPost = null;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(getPostList.fulfilled, (state, action) => {
                state.postList = action.payload;
            })

            .addCase(addPost.fulfilled, (state, action) => {
                state.postList.push(action.payload);
            })

            .addCase(updatePost.fulfilled, (state, action) => {
                state.postList.find((post, index) => {
                    if (post.id === action.payload.id) {
                        state.postList[index] = action.payload;
                        return true;
                    }
                    return false;
                });
                state.loadingAddPost = false;

                state.editingPost = null;
            })

            .addCase(updatePost.pending, (state, action) => {
                state.loadingAddPost = true;
            })

            .addCase(deletePost.fulfilled, (state, action) => {
                const postId = action.meta.arg;
                const deletePostIndex = state.postList.findIndex((post) => post.id === postId);

                if (deletePostIndex !== -1) {
                    state.postList.splice(deletePostIndex, 1);
                }

                // state.postList = state.postList.filter((post) => post.id !== postId);
            })

            .addMatcher<PendingAction>(
                (action) => action.type.endsWith('/pending'),
                (state, action) => {
                    if (!state.loadingAddPost) {
                        state.loading = true;
                        state.currentRequestId = action.meta.requestId;
                    }
                },
            )
            .addMatcher<RejectedAction>(
                (action) => action.type.endsWith('/rejected'),
                (state, action) => {
                    if (state.loading && state.currentRequestId === action.meta.requestId) {
                        state.loading = false;
                        state.currentRequestId = undefined;
                    }
                },
            )
            .addMatcher<FulfilledAction>(
                (action) => action.type.endsWith('/fulfilled'),
                (state, action) => {
                    if (state.loading && state.currentRequestId === action.meta.requestId) {
                        state.loading = false;
                        state.currentRequestId = undefined;
                    }
                    state.loading = false;
                },
            );
    },
});

export const { startEditingPost, cancelEditingPost } = blogSlice.actions;

const blogReducer = blogSlice.reducer;
export default blogReducer;

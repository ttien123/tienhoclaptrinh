import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const blogApi = createApi({
    reducerPath: 'blogApi',
    tagTypes: ['POST'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    endpoints: (build) => ({
        getPosts: build.query({
            query: () => 'posts',
            providesTags(result) {
                if (result) {
                    const final = [...result.map(({ id }) => ({ type: 'Posts', id })), { type: 'Posts', id: 'LIST' }];
                    return final;
                }
                return { type: 'Posts', id: 'LIST' };
            },
        }),

        addPost: build.mutation({
            query(body) {
                return {
                    url: 'posts',
                    method: 'POST',
                    body,
                };
            },
            invalidatesTags: (result, error, body) => [{ type: 'Posts', id: 'LIST' }],
        }),

        getPostId: build.query({
            query: (id) => `posts/${id}`,
        }),

        updatePost: build.mutation({
            query(data) {
                return {
                    url: `posts/${data.id}`,
                    method: 'PUT',
                    body: data.body,
                };
            },
            invalidatesTags: (result, error, data) => [{ type: 'Posts', id: data.id }],
        }),

        deletePost: build.mutation({
            query(id) {
                return {
                    url: `posts/${id}`,
                    method: 'DELETE',
                };
            },
            invalidatesTags: (result, error, id) => [{ type: 'Posts', id }],
        }),
    }),
});

export const { useGetPostsQuery, useAddPostMutation, useDeletePostMutation, useGetPostIdQuery, useUpdatePostMutation } =
    blogApi;

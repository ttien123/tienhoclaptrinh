import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../types/type.blog';

export const blogApi = createApi({
    reducerPath: 'blogApi',
    tagTypes: ['Posts'],
    keepUnusedDataFor: 10,
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    endpoints: (build) => ({
        getPost: build.query<Post[], void>({
            query: () => 'posts',
            providesTags(result) {
                if (result) {
                    const final = [
                        ...result.map(({ id }) => ({ type: 'Posts' as const, id })),
                        { type: 'Posts' as const, id: 'LIST' },
                    ];
                    return final;
                }

                return [{ type: 'Posts', id: 'LIST' }];
            },
        }),

        getPostId: build.query<Post, string>({
            query: (id) => `posts/${id}`,
        }),
        addPost: build.mutation<Post, Omit<Post, 'id'>>({
            query(body) {
                return {
                    url: 'posts',
                    method: 'POST',
                    body,
                };
            },
            invalidatesTags: (result, error, body) => [{ type: 'Posts', id: 'LIST' }],
        }),

        updatePost: build.mutation<Post, { id: string; body: Post }>({
            query(data) {
                return {
                    url: `posts/${data.id}`,
                    method: 'PUT',
                    body: data.body,
                };
            },
            invalidatesTags: (result, error, data) => [{ type: 'Posts', id: data.id }],
        }),
        deletePost: build.mutation<Post, string>({
            query(id) {
                return {
                    url: `posts/${id}`,
                    method: 'DELETE',
                };
            },
            invalidatesTags: (result, error, id) => [{ type: 'Posts', id: id }],
        }),
    }),
});

export const { useGetPostQuery, useGetPostIdQuery, useAddPostMutation, useUpdatePostMutation, useDeletePostMutation } =
    blogApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BlogType } from "./blogsSlice";

const API_BASE_URL = "http://localhost:8000/blogs";

export const blogsApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: API_BASE_URL}),
    
    endpoints: (builder) => ({
        
        getBlogs: builder.query<BlogType[], void>({
            query: () => '/'
        }),

        getBlog: builder.query<BlogType, string>({
            query: (blogId) => `/${blogId}`
        }),

        addBlog: builder.mutation<BlogType, BlogType>({
            query: (blog) => ({
                url: '/',
                method: 'POST',
                body: blog
            })
        }),

        deleteBlog: builder.mutation<void, string>({
            query: (blogId) => ({
                url: `${blogId}`,
                method: 'DELETE',
            })
        }),

        updateBlog: builder.mutation<BlogType, Partial<BlogType>>({
            query: (blog) => ({
                url: `${blog.id}`,
                method: 'PUT',
                body: blog
            })
        })
    })
});

export const { useGetBlogsQuery, useAddBlogMutation, useDeleteBlogMutation, useUpdateBlogMutation, useGetBlogQuery } = blogsApi;
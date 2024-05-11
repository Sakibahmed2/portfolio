import { baseApi } from "./baseApi";

const blogsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addBlogs: build.mutation({
      query: (data) => ({
        url: "/blogs",
        method: "POST",
        body: data,
      }),
    }),
    getAllBlogs: build.query({
      query: () => ({
        url: "/blogs",
      }),
    }),
  }),
});

export const { useAddBlogsMutation, useGetAllBlogsQuery } = blogsApi;

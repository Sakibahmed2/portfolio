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
    getSingleBlog: build.query({
      query: (id) => ({
        url: `/blogs/${id}`,
      }),
    }),
    updateBlog: build.mutation({
      query: ({ data, id }) => ({
        url: `/blogs/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useAddBlogsMutation,
  useGetAllBlogsQuery,
  useGetSingleBlogQuery,
  useUpdateBlogMutation,
} = blogsApi;

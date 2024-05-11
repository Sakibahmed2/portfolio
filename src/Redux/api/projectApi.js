import { baseApi } from "./baseApi";

const projectApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addProjects: build.mutation({
      query: (data) => ({
        url: "/projects",
        method: "POST",
        body: data,
      }),
    }),
    getAllProjects: build.query({
      query: () => ({
        url: "/projects",
      }),
    }),
  }),
});

export const { useAddProjectsMutation, useGetAllProjectsQuery } = projectApi;

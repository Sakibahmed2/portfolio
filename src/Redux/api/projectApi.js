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
    getSingleProject: build.query({
      query: (id) => ({
        url: `/projects/${id}`,
      }),
    }),
    updateProject: build.mutation({
      query: ({ data, id }) => ({
        url: `/projects/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteProject: build.mutation({
      query: (id) => ({
        url: `/projects/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddProjectsMutation,
  useGetAllProjectsQuery,
  useUpdateProjectMutation,
  useGetSingleProjectQuery,
  useDeleteProjectMutation,
} = projectApi;

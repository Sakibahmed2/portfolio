import { baseApi } from "./baseApi";

const skillApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addSkill: build.mutation({
      query: (data) => ({
        url: "/skills",
        method: "POST",
        body: data,
      }),
    }),
    getAllSkill: build.query({
      query: () => ({
        url: "/skills",
      }),
    }),
  }),
});

export const { useAddSkillMutation, useGetAllSkillQuery } = skillApi;

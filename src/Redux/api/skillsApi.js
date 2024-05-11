import { build } from "vite";
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
  }),
});

export const { useAddSkillMutation } = skillApi;

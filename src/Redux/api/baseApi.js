import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://portfolio-backend-orcin-six.vercel.app/api/v1",
  }),
  endpoints: () => ({}),
});

export const { useGetPokemonByNameQuery } = baseApi;

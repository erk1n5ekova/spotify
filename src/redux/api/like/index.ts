import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getLike: build.query<LIKE.GetLikeResponse, LIKE.GetLikeRequest>({
      query: () => ({
        url: "/me/tracks",
        method: "GET",
      }),
      providesTags: ["like"],
    }),
  }),
});

export const { useGetLikeQuery } = api;

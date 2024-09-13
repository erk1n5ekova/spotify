import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getRecommendations: build.query<
      RECOMMENDS.GetRecommendationsResponse,
      RECOMMENDS.GetRecommendationsRequest
    >({
      query: () => ({
        url: "/recommendations",
        method: "GET",
      }),
      providesTags: ["recommendations"],
    }),
  }),
});

export const { useGetRecommendationsQuery } = api;

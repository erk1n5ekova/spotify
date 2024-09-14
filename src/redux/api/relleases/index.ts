import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getReleasis: build.query<
      RELEASES.GetReleasesResponse,
      RELEASES.GetReleasessRequest
    >({
      query: (query) => ({
        url: "/browse/new-releases",
        method: "GET",
        params: {
          q: query,
          type: "track",
          limit: 12,
        },
      }),
      providesTags: ["releases"],
    }),
  }),
});

export const { useGetReleasisQuery } = api;

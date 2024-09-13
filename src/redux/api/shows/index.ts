import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getShows: build.query<SHOWS.GetShowsResponse, SHOWS.GetShowsRequest>({
      query: () => ({
        url: "/shows",
        method: "GET",
      }),
      providesTags: ["shows"],
    }),
  }),
});

export const { useGetShowsQuery } = api;

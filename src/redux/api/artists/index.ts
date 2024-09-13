import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getArtists: build.query<
      ARTISTS.GetArtistsResponce,
      ARTISTS.GetArtistsRequest
    >({
      query: () => ({
        url: "/artists",
        method: "GET",
      }),
      providesTags: ["artists"],
    }),
  }),
});

export const { useGetArtistsQuery } = api;

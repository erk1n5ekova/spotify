import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getAlbums: build.query<ALBUMS.GetAlbumsResponse, ALBUMS.GetAlbumsRequest>({
      query: (query) => ({
        url: "/albums",
        method: "GET",
        params: {
          q: query,
          type: "track",
          limit: 6,
        },
      }),
      providesTags: ["albums"],
    }),
  }),
});

export const { useGetAlbumsQuery } = api;

import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getPlaylists: build.query<
      PLAYLIST.GetPlaylistsResponse,
      PLAYLIST.GetPlaylistsRequest
    >({
      query: () => ({
        url: "/me/playlists",
        method: "GET",
      }),
      providesTags: ["playlist"],
    }),
    getPlaylistById: build.query<
      PLAYLIST.GetPlaylistByIdResponse,
      PLAYLIST.GetPlaylistByIdRequest
    >({
      query: (playlistId) => ({
        url: `/playlists/${playlistId}`,
        method: "GET",
      }),
      providesTags: ["playlist"],
    }),
  }),
});

export const { useGetPlaylistsQuery, useGetPlaylistByIdQuery } = api;

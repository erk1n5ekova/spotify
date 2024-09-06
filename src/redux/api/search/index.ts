import { api as index } from "..";

const api = index.injectEndpoints({
	endpoints: (build) => ({
		searchTracks: build.query<
			SEARCH.GetSearchResponse,
			SEARCH.GetSearchRequest
		>({
			query: (query) => ({
				url: "/search",
				methods: "GET",
				params: {
					q: query,
					type: "track",
					limit: 10,
				},
			}),
			providesTags: ["search"],
		}),
	}),
});
export const { useSearchTracksQuery } = api;

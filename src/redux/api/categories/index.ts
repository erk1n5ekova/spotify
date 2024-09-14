import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<
      CATEGORIES.GetCategoriesResponse,
      CATEGORIES.GetCategoriesRequest
    >({
      query: () => ({
        url: "/browse/categories",
        method: "GET",
        params: {
          limit: 12,
        },
      }),
      providesTags: ["categories"],
    }),
  }),
});

export const { useGetCategoriesQuery } = api;

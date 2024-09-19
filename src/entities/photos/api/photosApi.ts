import { API } from "@/shared/const/baseUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPhoto } from "@/shared/types/photoTypes";

export const photosApi = createApi({
  reducerPath: "photosApi",
  baseQuery: fetchBaseQuery({ baseUrl: API.baseUrl }),
  tagTypes: ["Photo"],
  endpoints: (builder) => ({
    getAllPhotos: builder.query<IPhoto[], void>({
      query: () => `${API.endpoints.photos}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Photo", id } as const)),
              { type: "Photo", id: "LIST" },
            ]
          : [{ type: "Photo", id: "LIST" }],
    }),
  }),
});

export const { useGetAllPhotosQuery } = photosApi;

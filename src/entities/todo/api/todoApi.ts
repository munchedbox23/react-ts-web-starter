import { API } from "@/shared/const/baseUrl";
import { ITodo } from "@/shared/types/todoTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: API.baseUrl }),
  tagTypes: ["Todo"],
  endpoints: (builder) => ({
    getAllTodos: builder.query<ITodo[], void>({
      query: () => `${API.endpoints.todos}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Todo", id } as const)),
              { type: "Todo", id: "LIST" },
            ]
          : [{ type: "Todo", id: "LIST" }],
    }),
  }),
});

export const { useGetAllTodosQuery } = todoApi;

import { API } from "@/shared/const/baseUrl";
import { ITodo } from "@/shared/types/todoTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const editTodoApi = createApi({
  reducerPath: "editTodoApi",
  baseQuery: fetchBaseQuery({ baseUrl: API.baseUrl }),
  tagTypes: ["Todo"],
  endpoints: (builder) => ({
    deleteTodo: builder.mutation<void, number>({
      query: (id) => ({
        url: `${API.endpoints.todos}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Todo", id }],
    }),
    updateTodoStatus: builder.mutation<void, { id: number; patchData: ITodo }>({
      query: ({ id, patchData }) => ({
        url: `${API.endpoints.todos}/${id}`,
        method: "PATCH",
        body: patchData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Todo", id }],
    }),
  }),
});

export const { useDeleteTodoMutation, useUpdateTodoStatusMutation } =
  editTodoApi;

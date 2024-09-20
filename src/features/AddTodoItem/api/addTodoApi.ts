import { API } from "@/shared/const/baseUrl";
import { ITodo } from "@/shared/types/todoTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const addTodoApi = createApi({
  reducerPath: "addTodoApi",
  baseQuery: fetchBaseQuery({ baseUrl: API.baseUrl }),
  tagTypes: ["Todo"],
  endpoints: (builder) => ({
    postTodo: builder.mutation<ITodo[], ITodo>({
      query(body) {
        return {
          url: `${API.endpoints.todos}`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: [{ type: "Todo", id: "LIST" }],
    }),
  }),
});

export const { usePostTodoMutation } = addTodoApi;

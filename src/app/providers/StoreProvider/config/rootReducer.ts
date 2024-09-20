import { photosApi } from "@/entities/photos";
import photoSlice from "@/entities/photos/model/slice/photoSlice";
import { todoApi } from "@/entities/todo/api/todoApi";
import { editTodoApi } from "@/features/EditTodoItem/api/editTodoApi";
import { combineReducers } from "redux";
import { addTodoApi } from "@/features/AddTodoItem/api/addTodoApi";

export const rootReducer = combineReducers({
  [photosApi.reducerPath]: photosApi.reducer,
  [todoApi.reducerPath]: todoApi.reducer,
  [editTodoApi.reducerPath]: editTodoApi.reducer,
  [addTodoApi.reducerPath]: addTodoApi.reducer,
  photos: photoSlice,
});

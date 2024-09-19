import { photosApi } from "@/entities/photos";
import photoSlice from "@/entities/photos/model/slice/photoSlice";
import { todoApi } from "@/entities/todo/api/todoApi";
import { editTodoApi } from "@/features/EditTodoItem/api/editTodoApi";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  [photosApi.reducerPath]: photosApi.reducer,
  [todoApi.reducerPath]: todoApi.reducer,
  [editTodoApi.reducerPath]: editTodoApi.reducer,
  photos: photoSlice,
});

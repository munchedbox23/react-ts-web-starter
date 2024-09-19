import { photosApi } from "@/entities/photos";
import photoSlice from "@/entities/photos/model/slice/photoSlice";
import { todoApi } from "@/entities/todo/api/todoApi";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  [photosApi.reducerPath]: photosApi.reducer,
  [todoApi.reducerPath]: todoApi.reducer,
  photos: photoSlice,
});

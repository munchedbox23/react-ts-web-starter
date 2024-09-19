import { photosApi } from "@/entities/photos";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  [photosApi.reducerPath]: photosApi.reducer,
});

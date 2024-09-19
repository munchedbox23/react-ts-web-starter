import { photosApi } from "@/entities/photos";
import photoSlice from "@/entities/photos/model/slice/photoSlice";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  [photosApi.reducerPath]: photosApi.reducer,
  photos: photoSlice,
});

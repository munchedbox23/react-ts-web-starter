import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { rootReducer } from "./rootReducer";
import { photosApi } from "@/entities/photos";
import { todoApi } from "@/entities/todo/api/todoApi";
import { editTodoApi } from "@/features/EditTodoItem/api/editTodoApi";
import { addTodoApi } from "@/features/AddTodoItem/api/addTodoApi";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      photosApi.middleware,
      todoApi.middleware,
      editTodoApi.middleware,
      addTodoApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import type { RootState } from "@/app/providers/StoreProvider";

export const selectLimit = (state: RootState) => state.photos.limit;
export const selectStart = (state: RootState) => state.photos.start;
export const selectPage = (state: RootState) => state.photos.page;
export const selectTotalRecords = (state: RootState) =>
  state.photos.totalRecords;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TPhotoSliceState = {
  start: number;
  limit: number;
  page: number;
  totalRecords: number;
};

const initialState: TPhotoSliceState = {
  start: 0,
  limit: 20,
  page: 1,
  totalRecords: 0,
};

export const photoSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
      state.page = 1;
      state.start = 0;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
      state.start = (action.payload - 1) * state.limit;
    },
    setTotalRecords: (state, action: PayloadAction<number>) => {
      state.totalRecords = action.payload;
    },
  },
});

export const { setLimit, setPage, setTotalRecords } = photoSlice.actions;
export default photoSlice.reducer;

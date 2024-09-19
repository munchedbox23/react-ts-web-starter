import { useGetAllPhotosQuery } from "@/entities/photos";
import { memo, useEffect } from "react";
import { Stack, Typography, Pagination } from "@mui/material";
import { PhotosList } from "@/entities/photos";
import { useAppDispatch, useAppSelector } from "@/app/providers/StoreProvider";
import { shallowEqual } from "react-redux";
import {
  setPage,
  setTotalRecords,
} from "@/entities/photos/model/slice/photoSlice";

export const Photos = memo(() => {
  const { data: photos = [], isLoading, isError } = useGetAllPhotosQuery();
  const dispatch = useAppDispatch();

  const { limit, start, page, totalRecords } = useAppSelector(
    (state) => ({
      limit: state.photos.limit,
      start: state.photos.start,
      page: state.photos.page,
      totalRecords: state.photos.totalRecords,
    }),
    shallowEqual
  );

  useEffect(() => {
    if (photos.length > 0) {
      dispatch(setTotalRecords(photos.length));
    }
  }, [photos, dispatch]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    dispatch(setPage(page));
  };

  const totalPages = Math.ceil(totalRecords / limit);

  return (
    <Stack direction="column" alignItems="flex-start">
      <Typography
        variant="h2"
        sx={{
          textAlign: "left",
          fontSize: "32px",
          fontWeight: 700,
          marginLeft: "66px",
        }}
      >
        Photos
      </Typography>
      <Stack
        direction="column"
        alignItems="center"
        sx={{ paddingBottom: "15px" }}
      >
        <PhotosList
          limit={limit}
          start={start}
          photos={photos}
          isLoading={isLoading}
          isError={isError}
        />
        <Pagination
          count={totalPages}
          onChange={handlePageChange}
          color="primary"
          page={page}
        />
      </Stack>
    </Stack>
  );
});

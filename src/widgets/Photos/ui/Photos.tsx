import { useGetAllPhotosQuery } from "@/entities/photos";
import { memo } from "react";
import { Stack, Typography, Pagination } from "@mui/material";
import { PhotosList } from "@/entities/photos";

export const Photos = memo(() => {
  const { data: photos = [], isLoading, isError } = useGetAllPhotosQuery();

  return (
    <Stack direction="column" sx={{ paddingBottom: "15px" }}>
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
      <PhotosList photos={photos} isLoading={isLoading} isError={isError}>
        <Pagination />
      </PhotosList>
    </Stack>
  );
});

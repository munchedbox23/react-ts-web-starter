import { FC } from "react";
import { Card, Stack } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

export const PhotoCardSkeleton: FC = () => {
  return (
    <Card
      data-cy="photo-card-skeleton"
      sx={{ maxWidth: "200px", margin: "0 10px 25px 0 !important" }}
    >
      <Stack
        direction="column"
        spacing={1.5}
        sx={{
          alignItems: "flex-start",
          maxWidth: "100%",
          justifyContent: "flex-start",
          borderRadius: "8px",
          boxShadow: "4px 4px 8px 0px rgba(34, 60, 80, 0.2)",
          position: "relative",
        }}
      >
        <Skeleton variant="rectangular" width="200px" height={200} />
        <Skeleton variant="text" width="80%" height={24} />
      </Stack>
    </Card>
  );
};

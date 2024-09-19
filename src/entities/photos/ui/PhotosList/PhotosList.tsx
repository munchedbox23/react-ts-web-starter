import { IPhoto } from "@/shared/types/photoTypes";
import { FC, PropsWithChildren } from "react";
import styles from "./PhotoList.module.css";
import { Box, Stack, Typography } from "@mui/material";
import { PhotoCard } from "../PhotoCard/PhotoCard";
import { PhotoCardSkeleton } from "../PhotoSkeleton/PhotoSkeleton";

type TPhotosListProps = {
  photos: IPhoto[];
  isLoading: boolean;
  isError: boolean;
  limit: number;
  start: number;
};

export const PhotosList: FC<PropsWithChildren<TPhotosListProps>> = ({
  photos,
  isLoading,
  isError,
  children,
  start,
  limit,
}) => {
  return (
    <article className={styles.photos}>
      <Stack
        direction="row"
        alignItems="flex-start"
        justifyContent="center"
        flexWrap="wrap"
        sx={{ marginRight: "-10px" }}
      >
        {isLoading && !photos.length
          ? Array.from(new Array(limit)).map((_, index) => (
              <PhotoCardSkeleton key={index} />
            ))
          : photos
              .slice(start, start + limit)
              .map((item) => <PhotoCard photo={item} key={item.id} />)}
      </Stack>
      {(isError || !photos.length) && (
        <Box sx={{ textAlign: "center", padding: "16px" }}>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: "24px", fontWeight: 600, textAlign: "center" }}
          >
            К сожалению, сервис не смог найти ни одного фото
          </Typography>
        </Box>
      )}
      {children}
    </article>
  );
};

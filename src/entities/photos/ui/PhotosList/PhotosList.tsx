import { IPhoto } from "@/shared/types/photoTypes";
import { FC, PropsWithChildren } from "react";
import styles from "./PhotoList.module.css";
import { Box, Stack, Typography } from "@mui/material";
import { PhotoCard } from "../PhotoCard/PhotoCard";

type TPhotosListProps = {
  photos: IPhoto[];
  isLoading: boolean;
  isError: boolean;
};

export const PhotosList: FC<PropsWithChildren<TPhotosListProps>> = ({
  photos,
  isLoading,
  isError,
  children,
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
          ? Array.from(new Array(10)).map((_, index) => <div key={index} />)
          : photos
              .slice(0, 20)
              .map((item) => <PhotoCard photo={item} key={item.id} />)}
      </Stack>
      {(isError || !photos.length) && (
        <Box sx={{ textAlign: "center", padding: "16px" }}>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: "24px", fontWeight: 600, textAlign: "center" }}
          >
            К сожалению, сервис не смог найти ни одного объявления
          </Typography>
        </Box>
      )}
      {children}
    </article>
  );
};

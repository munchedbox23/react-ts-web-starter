import { FC } from "react";
import { IPhoto } from "@/shared/types/photoTypes";
import { Card, Stack, Typography } from "@mui/material";
import styles from "./PhotoCard.module.css";

type TPhotoCard = {
  photo: IPhoto;
};

export const PhotoCard: FC<TPhotoCard> = ({ photo }) => {
  return (
    <Card
      data-testId="PhotoItem"
      sx={{
        maxWidth: "200px",
        cursor: "pointer",
        margin: "0 10px 25px 0 !important",
      }}
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
        <img
          src="https://avatars.mds.yandex.net/i?id=56467abb6d0416b7b24e703e2b868551_l-5288159-images-thumbs&n=13"
          alt="image"
          className={styles.cardPoster}
        />

        <Typography
          variant="h3"
          sx={{
            fontSize: "18px",
            fontWeight: 700,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "100%",
            padding: "0px 8px 4px 8px",
            marginTop: "0px !important",
          }}
        >
          {photo?.title}
        </Typography>
      </Stack>
    </Card>
  );
};

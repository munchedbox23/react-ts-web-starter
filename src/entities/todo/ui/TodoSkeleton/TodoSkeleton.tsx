import { FC } from "react";
import { Card, CardContent, Skeleton } from "@mui/material";

export const TodoItemSkeleton: FC = () => {
  return (
    <Card
      data-cy="todo-card-skeleton"
      sx={{
        width: "100%",
        minWidth: { xs: "300px", md: "700px" },
        margin: "0 10px 25px 0 !important",
        boxShadow: "4px 4px 8px 0px rgba(34, 60, 80, 0.2)",
      }}
    >
      <CardContent>
        <Skeleton variant="text" width="80%" height={24} />
        <Skeleton
          variant="text"
          width="50%"
          height={20}
          sx={{ marginTop: "10px" }}
        />
      </CardContent>
    </Card>
  );
};

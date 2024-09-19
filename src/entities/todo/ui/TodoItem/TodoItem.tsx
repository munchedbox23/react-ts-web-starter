import { FC, ReactNode } from "react";
import { Card, CardContent, Typography, Chip } from "@mui/material";
import { ITodo } from "@/shared/types/todoTypes";

type TTodoCardProps = {
  todo: ITodo;
  todoOptions?: ReactNode;
};

export const TodoItem: FC<TTodoCardProps> = ({ todo, todoOptions }) => {
  return (
    <Card
      data-cy="todo-card"
      sx={{
        width: "100%",
        margin: "0 10px 25px 0 !important",
        position: "relative",
        boxShadow: "4px 4px 8px 0px rgba(34, 60, 80, 0.2)",
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div">
          {todo.title}
        </Typography>
        <Chip
          label={todo.completed ? "Completed" : "Pending"}
          color={todo.completed ? "success" : "error"}
          sx={{ marginTop: "10px" }}
        />
        {todoOptions}
      </CardContent>
    </Card>
  );
};

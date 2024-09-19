import { FC, PropsWithChildren, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import styles from "./TodoList.module.css";
import {
  TodoItem,
  useGetAllTodosQuery,
  TodoItemSkeleton,
} from "@/entities/todo";
import { Button } from "@mui/material";
import { EditTodoItem } from "@/features/EditTodoItem";

export const TodoList: FC<PropsWithChildren> = ({ children }) => {
  const { data: todos = [], isLoading, isError } = useGetAllTodosQuery();
  const [visibleTodos, setVisibleTodos] = useState(5);

  const showMoreUsers = () => {
    setVisibleTodos((prevState) => prevState + 10);
  };

  return (
    <article className={styles.todos}>
      <Stack direction="column" alignItems="center" justifyContent="center">
        {isLoading && !todos.length
          ? Array.from(new Array(10)).map((_, index) => (
              <TodoItemSkeleton key={index} />
            ))
          : todos
              .slice(0, visibleTodos)
              .map((item) => (
                <TodoItem
                  todo={item}
                  key={item.id}
                  todoOptions={<EditTodoItem />}
                />
              ))}
        {visibleTodos < todos.length && (
          <Button onClick={showMoreUsers}>Показать больше</Button>
        )}
      </Stack>
      {(isError || !todos.length) && (
        <Box sx={{ textAlign: "center", padding: "16px" }}>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: "24px", fontWeight: 600, textAlign: "center" }}
          >
            К сожалению, сервис не смог найти ни одного todo
          </Typography>
        </Box>
      )}
      {children}
    </article>
  );
};

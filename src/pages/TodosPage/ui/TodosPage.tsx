import { Stack, Typography } from "@mui/material";
import { TodoList } from "@/widgets/TodoList";
import { AddTodoItem } from "@/features/AddTodoItem";

export const TodosPage = () => {
  return (
    <Stack direction="column">
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ minWidth: { xs: "24px" }, padding: { xs: "0 10px" } }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "left",
            fontSize: "32px",
            fontWeight: 700,
            marginLeft: { xs: "15px", md: "10px" },
          }}
        >
          Todos
        </Typography>
        <AddTodoItem />
      </Stack>
      <TodoList />
    </Stack>
  );
};

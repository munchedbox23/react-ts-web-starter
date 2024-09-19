import { Stack, Typography } from "@mui/material";
import { TodoList } from "@/widgets/TodoList";

export const TodosPage = () => {
  return (
    <Stack direction="column">
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
      <TodoList />
    </Stack>
  );
};

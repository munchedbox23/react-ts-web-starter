import { FC, useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import { useDeleteTodoMutation } from "../api/editTodoApi";
import { useGetAllTodosQuery } from "@/entities/todo/api/todoApi";

export const EditTodoItem: FC<{ id: number }> = ({ id }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [deleteTodo] = useDeleteTodoMutation();
  const { refetch } = useGetAllTodosQuery();

  const handleDelete = async () => {
    try {
      await deleteTodo(id).unwrap();
      refetch();
    } catch (err) {
      console.error("Failed to delete advertisement:", err);
    }
  };

  return (
    <>
      <IconButton
        aria-label="more"
        aria-controls="todo-menu"
        aria-haspopup="true"
        onClick={handleMenuOpen}
        sx={{ position: "absolute", top: "2px", right: "2px" }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="todo-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <CheckIcon sx={{ marginRight: "8px" }} />
          Complete
        </MenuItem>
        <MenuItem onClick={() => handleDelete()}>
          <DeleteIcon sx={{ marginRight: "8px" }} />
          Delete
        </MenuItem>
      </Menu>
    </>
  );
};

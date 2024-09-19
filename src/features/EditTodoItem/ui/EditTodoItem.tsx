import { FC, useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

export const EditTodoItem: FC = ({}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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
        <MenuItem>
          <DeleteIcon sx={{ marginRight: "8px" }} />
          Delete
        </MenuItem>
      </Menu>
    </>
  );
};

import { Button, Snackbar, Alert } from "@mui/material";
import { FC, useCallback, useState } from "react";
import { Modal } from "@/shared/ui/Modal";
import { AddTodoItemForm } from "../AddTodoItemForm/AddTodoItemForm";

export const AddTodoItem: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleOpenSnackbar = useCallback(() => {
    setOpenSnackbar(true);
  }, []);

  const handleCloseSnackbar = useCallback(() => {
    setOpenSnackbar(false);
  }, []);

  return (
    <>
      <Button variant="contained" onClick={handleOpenModal}>
        Create Todo
      </Button>
      {isModalOpen && (
        <Modal title="Create Todo" onClose={handleCloseModal}>
          <AddTodoItemForm
            onClose={handleCloseModal}
            onSuccess={handleOpenSnackbar}
          />
        </Modal>
      )}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Todo successfully added!
        </Alert>
      </Snackbar>
    </>
  );
};

import { Button, TextField } from "@mui/material";
import { useForm } from "@/shared/lib/hooks/useForm";
import { Preloader } from "@/shared/ui/Preloader";
import { FormEvent, useState } from "react";
import { validateName } from "../../model/lib/validateName";
import { usePostTodoMutation } from "../../api/addTodoApi";
import formStyles from "./AddTodoItemForm.module.css";

interface AddTodoItemFormProps {
  onClose: () => void;
  onSuccess: () => void;
}

export const AddTodoItemForm = ({
  onClose,
  onSuccess,
}: AddTodoItemFormProps) => {
  const { formState, onChange } = useForm<{ name: string }>({
    name: "",
  });
  const [postTodo, { isLoading, isSuccess }] = usePostTodoMutation();

  const [errors, setErrors] = useState({
    name: "",
  });

  const validateForm = () => {
    const nameError = validateName(formState.name ?? "");

    setErrors({
      name: nameError || "",
    });

    return !nameError;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    await postTodo({
      userId: 1,
      id: Math.floor(Math.random() * 10000),
      title: formState.name,
      completed: false,
    }).unwrap();

    onSuccess();
    onClose();
  };

  return (
    <form className={formStyles.form} onSubmit={handleSubmit}>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <TextField
            type="text"
            autoComplete="off"
            name="name"
            label="Todo name"
            variant="outlined"
            value={formState.name ?? ""}
            onChange={onChange}
            error={!!errors.name}
            helperText={errors.name}
            sx={{ width: "40%" }}
          />
          <Button type="submit" variant="outlined">
            Create
          </Button>
        </>
      )}
    </form>
  );
};

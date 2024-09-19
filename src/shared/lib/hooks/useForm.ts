import { useAppDispatch } from "@/app/providers/StoreProvider";
import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export const useForm = <T>(state: T) => {
  const [formState, setFormState] = useState(state);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onChange = <T extends HTMLInputElement | HTMLTextAreaElement>(
    e: ChangeEvent<T>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (
    e: FormEvent<HTMLFormElement>,
    func: any,
    route?: string
  ) => {
    e.preventDefault();

    dispatch(func(formState))
      .then(() => navigate(route ?? "/", { replace: true }))
      .catch((error: unknown) => console.error(error));
    setFormState(state);
  };
  return { onSubmit, onChange, formState, setFormState };
};

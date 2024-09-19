import { createBrowserRouter, Navigate } from "react-router-dom";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { MainLayout } from "@/app/layouts/MainLayout";
import { PhotosPage } from "@/pages/PhotosPage";
import { appRoutes } from "@/shared/const/router";
import { TodosPage } from "@/pages/TodosPage";

export const router = createBrowserRouter([
  { path: appRoutes.main, element: <Navigate to={appRoutes.photos} replace /> },
  {
    path: appRoutes.photos,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <PhotosPage />,
      },
    ],
  },
  {
    path: appRoutes.todos,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <TodosPage />,
      },
    ],
  },
  {
    path: appRoutes.not_found,
    element: <NotFoundPage />,
  },
]);

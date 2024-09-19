import { createBrowserRouter, Navigate } from "react-router-dom";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { MainLayout } from "@/app/layouts/MainLayout";
import { PhotosPage } from "@/pages/PhotosPage";
import { appRoutes } from "@/shared/const/router";

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
    path: appRoutes.not_found,
    element: <NotFoundPage />,
  },
]);

import { createBrowserRouter } from "react-router-dom";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { MainLayout } from "@/app/layouts/MainLayout";
import { appRoutes } from "@/shared/const/router";

export const router = createBrowserRouter([
  {
    path: appRoutes.main,
    element: <MainLayout />,
  },
  {
    path: appRoutes.not_found,
    element: <NotFoundPage />,
  },
]);

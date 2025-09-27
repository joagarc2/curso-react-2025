import { createBrowserRouter, Navigate } from "react-router";
import { HomePage } from "../heroes/home/HomePage";
import { HeroPage } from "../heroes/pages/HeroPage";
// import { SearchPage } from "../heroes/search/SearchPage";
import { AdminPage } from "../admin/pages/AdminPage";
import { HeroesLayout } from "../heroes/layouts/HeroesLayout";
import { AdminLayout } from "../admin/layouts/AdminLayout";
import { lazy } from "react";

const SearchPage = lazy(() => import("../heroes/search/SearchPage"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HeroesLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/heroes/:idSlug",
        element: <HeroPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "*",
        element: <Navigate to="/"/>
      }
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
    ],
  },
]);

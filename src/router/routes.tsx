import { lazy } from "react";
const HomePage = lazy(() => import("@pages/HomePage"));
const UserPage = lazy(() => import("@pages/UserPage"));
const ReposPage = lazy(() => import("@pages/ReposPage"));
import Layout from "./Layout";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "home", element: <HomePage /> },
      {
        path: "user/:username",
        children: [
          {
            index: true,
            element: <UserPage />,
          },
          {
            path: "repos",
            element: <ReposPage />,
          },
        ],
      },
    ],
  },
];

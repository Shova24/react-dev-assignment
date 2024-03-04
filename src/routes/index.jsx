import React from "react";
import { useRoutes } from "react-router-dom";

import Login from "../pages/Login";
import PublicLayout from "../layouts/PublicLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import HomePageLayout from "../layouts/HomePageLayout";

const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <HomePageLayout />,
      children: [{ element: <Home />, index: true }],
    },

    {
      path: "/login",
      element: <PublicLayout />,
      children: [{ element: <Login />, index: true }],
    },
    {
      path: "*",
      element: <PublicLayout />,
      children: [
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
};

export default AppRoutes;

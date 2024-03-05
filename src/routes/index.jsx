import React from "react";
import { useRoutes } from "react-router-dom";

import HomePageLayout from "../layouts/HomePageLayout";
import PublicLayout from "../layouts/PublicLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <HomePageLayout />,
      children: [{ element: <Home />, index: true }],
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

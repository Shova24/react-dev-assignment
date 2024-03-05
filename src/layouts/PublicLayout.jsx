import dayjs from "dayjs";
import React from "react";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="container flex items-center justify-center min-h-screen">
      <Outlet />
      <div className="absolute w-full text-center bottom-4">
        <p className="text-sm text-zinc-500">
          Copyright © Jannatul Ferdous Shova [{dayjs().format("YYYY")}]
        </p>
      </div>
    </div>
  );
};

export default PublicLayout;

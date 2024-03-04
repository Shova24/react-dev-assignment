import dayjs from "dayjs";
import React from "react";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="container  min-h-screen ">
      <Outlet />
      <div className="absolute bottom-4 text-center  w-full">
        <p className="text-sm text-zinc-500">
          Copyright © Jannatul Ferdous Shova [{dayjs().format("YYYY")}]
        </p>
      </div>
    </div>
  );
};

export default PublicLayout;

import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar";

const HomePageLayout = () => {
  return (
    <div className="bg-white">
      <div className="bg-white border-b-[.05px]">
        <NavBar />
      </div>

      <div className="min-w-2xl px-8 md:px-16 xl:px-24">
        <Outlet />
      </div>
      <footer className="sticky bottom-0"></footer>
    </div>
  );
};

export default HomePageLayout;

import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar";

const HomePageLayout = () => {
  return (
    <div className="bg-white ">
      <div className="bg-white  border-b-[.05px]">
        <NavBar />
      </div>

      <div className="min-h-screen container">
        <Outlet />
      </div>
      <footer className="sticky bottom-0">d</footer>
    </div>
  );
};

export default HomePageLayout;

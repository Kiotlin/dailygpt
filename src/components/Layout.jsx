// import "./App.css";
import ToolNavBar from "./ToolNav";
import meta from "../app/app";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="container mx-auto flex flex-wrap gap-2">
        <div className="w-full lg:w-2/5">
          <ToolNavBar appData={meta} />
        </div>
        <div className="w-full lg:w-2/5 lg:grow flex flex-col justify-center">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;

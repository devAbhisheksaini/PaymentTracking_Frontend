import { Outlet } from "react-router-dom";
import LeftMenu from "./LeftMenu";
import Headers from "./Header";

export function Layout() {
  return (
    <>
      <div className="layout h-screen ">
        {/* Header */}
        <Headers />
        

        {/* Main Content */}
        <div className="flex">
          <LeftMenu />
          <main className="flex-grow p-10 ml-48 overflow-x-hidden">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default Layout;

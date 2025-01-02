import { Outlet } from "react-router-dom";
import LeftMenu from "./LeftMenu";
import Headers from "./Header";
import { useState } from "react";

export function Layout() {
  const [showMenu, setShowMenu] = useState(true);  
  const layoutHandler = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };
  return (
    <>
      <div className="layout h-screen ">
        {/* Header */}
        <Headers layoutHandler = {layoutHandler} showMenu = {showMenu}/>
        

        {/* Main Content */}
        <div className="flex">
          {
            showMenu && <LeftMenu layoutHandler = {layoutHandler} showMenu = {showMenu}/>
          }
          
          <main className={`flex-grow p-10 overflow-x-hidden `+ (showMenu ? 'ml-48' : 'ml-0')}>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default Layout;

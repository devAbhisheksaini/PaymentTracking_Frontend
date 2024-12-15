import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftMenu from './LeftMenu';

export function Navbar() {
  return (
    <div className="flex">
      <LeftMenu />
      <main className="flex-grow p-6 ml-48 bg-slate-300 h-screen overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
}

export default Navbar;

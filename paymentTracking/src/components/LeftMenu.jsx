import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './png/Payment Tracker.png';
import profileLog from './png/personLogo.png';

function LeftMenu() {
  const menuItems = [
    { label: 'Daily Report', link: '/' },
    { label: 'User', link: '/user' },
    { label: 'Organization', link: '/organization' },
    { label: 'Roles', link: '/roles' },
  ];

  return (
    <>
      <nav className="h-screen fixed top-0 left-0 w-48 bg-gradient-to-b from-indigo-50 via-indigo-100 to-indigo-200 px-4 py-6">
      
        <div className="">
          <NavLink to="/" className="flex flex-col items-center mb-10">
            <img src={logo} alt="Payment Tracker Logo" className="w-16 h-16 rounded-full" />
          </NavLink>
          <NavLink to="/profile" className=" flex flex-col  items-center mb-6">
            <img
              src={profileLog}
              alt="Profile"
              className="w-12 h-12 rounded-full border-2 border-indigo-300 transition transform group-hover:scale-110"
            />
          </NavLink>
        </div>

        {/* Menu Items */}
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `block px-4 py-2 text-base font-medium rounded-md transition ${
                    isActive
                      ? 'bg-indigo-200 text-indigo-800 font-semibold'
                      : 'text-indigo-700 hover:text-indigo-800 hover:bg-indigo-100'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default LeftMenu;

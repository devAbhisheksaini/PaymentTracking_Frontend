import { NavLink } from 'react-router-dom';
import { RiMenuUnfold4Line } from "react-icons/ri";
import clsx from "clsx";

function LeftMenu({ layoutHandler, showMenu }) {
  const menuItems = [
    { label: 'Daily Report', link: '/' },
    { label: 'User', link: '/user' },
    { label: 'Organization', link: '/organization' },
    { label: 'Roles', link: '/roles'}
  ];

  return (
    <>
      <nav className="h-screen fixed top-0 left-0 w-48 bg-indigo-600 px-4 py-6 ">
      { showMenu && (
          <RiMenuUnfold4Line className='text-3xl cursor-pointer text-white'
          onClick={layoutHandler} />
      )}
        {/* Menu Items */}
        <ul className="space-y-2 mt-20">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `block px-4 py-2 font-medium rounded-md transition ${
                    isActive
                      ? 'text-indigo-800 bg-indigo-50 font-bold'
                      : 'text-white hover:text-indigo-800 hover:bg-indigo-50'
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

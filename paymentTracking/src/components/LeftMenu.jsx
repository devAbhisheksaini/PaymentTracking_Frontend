import { NavLink } from 'react-router-dom';

function LeftMenu() {
  const menuItems = [
    { label: 'Daily Report', link: '/' },
    { label: 'User', link: '/user' },
    { label: 'Organization', link: '/organization' },
    { label: 'Roles', link: '/roles'}
  ];
  
  return (
    <>
      <nav className="h-screen fixed top-0 left-0 w-48 bg-blue-600 px-4 py-6 ">
        {/* Menu Items */}
        <ul className="space-y-2 mt-20">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `block px-4 py-2 font-medium rounded-md transition ${
                    isActive
                      ? 'text-blue-800 bg-blue-50 font-bold'
                      : 'text-white hover:text-blue-800 hover:bg-blue-50'
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

import React, { useState } from 'react';

function LeftMenu() {
  const [activeItem, setActiveItem] = useState(null);

  const menuItems = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Contact', link: '/contact' },
    // ...more items
  ];

  return (
    <nav className="left-menu">
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={activeItem === index ? 'active' : ''}
            onClick={() => setActiveItem(index)}
          >
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default LeftMenu;
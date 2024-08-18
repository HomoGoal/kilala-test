import { NavLink } from 'react-router-dom';

import logo from '../assets/svg/logo.svg';
import { useState } from 'react';

const Header = () => {
  const navList = [
    {
      name: 'home',
      path: '/',
    },
    {
      name: 'about us',
      path: '/about-us',
    },
    {
      name: 'feature work',
      path: '/feature-work',
    },
    {
      name: 'reference',
      path: '/reference',
    },
    {
      name: 'blog',
      path: '/blog',
    },
  ];

  const [active, setActive] = useState(false);

  const handleActiveMenu = () => {
    setActive(!active)
  }

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <a className={`header__menu ${active && "active"}`} onClick={handleActiveMenu}>MENU</a>
      <nav className={`header__nav-container ${active && "active"}`}>
        {navList.map((item) => (
          <NavLink
            to={item.path}
            key={item.path}
            className={({ isActive }) =>
              isActive ? 'header__nav-item active' : 'header__nav-item'
            }
            onClick={handleActiveMenu}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;

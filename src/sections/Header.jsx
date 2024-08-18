import { NavLink } from 'react-router-dom';

import logo from '../assets/svg/logo.svg';

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
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className="header__nav-container">
        {navList.map((item) => (
          <NavLink
            to={item.path}
            key={item.path}
            className={({ isActive }) =>
              isActive ? 'header__nav-item active' : 'header__nav-item'
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;

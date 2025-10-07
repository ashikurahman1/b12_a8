import React from 'react';
import Logo from '/logo.png';
import { FaBars, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router';

const menuLink = [
  {
    id: 1,
    path: '/',
    name: 'Home',
  },
  {
    id: 2,
    path: '/apps',
    name: 'Apps',
  },
  {
    id: 3,
    path: '/installation',
    name: 'Installation',
  },
];

const menuItem = menuLink.map(item => (
  <li key={item.id}>
    <Link to={item.path}>{item.name} </Link>
  </li>
));

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="w-full lg:w-11/12 mx-auto p-5  ">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="lg:hidden mr-5">
              <FaBars className="text-2xl " />
            </div>
            <img src={Logo} alt="HERO IO" className="w-8 lg:w-10" />
            <span
              className="text-[1rem] font-bold ml-3 text-transparent bg-clip-text"
              style={{
                background:
                  'linear-gradient(145deg,rgba(99, 46, 227, 1) 0%, rgba(159, 98, 242, 1) 100%)',
                WebkitBackgroundClip: 'text',
              }}
            >
              HERO.IO
            </span>
          </div>
          <div>
            <ul className="gap-10 hidden lg:flex">{menuItem}</ul>
          </div>
          <div>
            <button
              className="text-white font-semibold px-3 py-2 lg:px-4 lg:py-3 rounded-md flex items-center gap-2 cursor-pointer"
              style={{
                background:
                  'linear-gradient(145deg,rgba(99, 46, 227, 1) 0%, rgba(159, 98, 242, 1) 100%)',
              }}
            >
              <FaGithub />
              Contribute
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

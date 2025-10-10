import React, { useState } from 'react';
import Logo from '/logo.png';
import { FaBars, FaGithub } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import { RiCloseLargeLine } from 'react-icons/ri';

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
  <li key={item.id} className="font-semibold">
    <NavLink to={item.path}>{item.name} </NavLink>
  </li>
));

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="w-full lg:w-11/12 mx-auto p-5  ">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden mr-4 text-2xl text-purple-700 cursor-pointer"
            >
              {isOpen ? <RiCloseLargeLine /> : <FaBars />}
            </div>
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="HERO IO" className="w-8 lg:w-10" />
              <span
                className="text-[1rem] lg:text-2xl font-bold ml-3 text-transparent bg-clip-text"
                style={{
                  background:
                    'linear-gradient(145deg,rgba(99, 46, 227, 1) 0%, rgba(159, 98, 242, 1) 100%)',
                  WebkitBackgroundClip: 'text',
                }}
              >
                HERO.IO
              </span>
            </Link>

            {/* Mobile Menu */}
            <div className="">
              {isOpen && (
                <div
                  className={`absolute lg:hidden  bg-purple-100 px-20 py-10 rounded shadow transition duration-300 -top-100 ${
                    isOpen ? 'top-20 left-0' : ''
                  }`}
                >
                  <ul className="space-y-5">{menuItem}</ul>
                </div>
              )}
            </div>
          </div>
          <div>
            <ul className="gap-10 hidden lg:flex">{menuItem}</ul>
          </div>
          <div>
            <a href="https://github.com/ashikurahman1" target="_blank">
              <button
                className="text-white font-semibold px-2 py-1 lg:px-4 lg:py-3 rounded-md flex items-center gap-2 cursor-pointer"
                style={{
                  background:
                    'linear-gradient(145deg,rgba(99, 46, 227, 1) 0%, rgba(159, 98, 242, 1) 100%)',
                }}
              >
                <FaGithub />
                Contribute
              </button>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

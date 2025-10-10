import React from 'react';
import FooterLogo from '/logo.png';
import { RiFacebookFill, RiLinkedinFill, RiTwitterXFill } from 'react-icons/ri';
import { Link } from 'react-router';
import { FaDiscord, FaFacebook, FaGithub, FaXTwitter } from 'react-icons/fa6';
const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto w-full lg:w-10/12 p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img src={FooterLogo} className="h-8 me-3" alt="Hero Io Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                HERO IO
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    HERO IO
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Installation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/ashikurahman1"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sm:flex sm:items-center sm:justify-between mt-12 my-8">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            {new Date().getFullYear()}{' '}
            <Link to="/" className="hover:underline">
              HERO IO™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 text-xl gap-5 sm:justify-center sm:mt-0 text-white">
            {/* Facebook */}
            <FaFacebook />

            {/* Discord */}
            <FaDiscord />

            {/* Twitter */}
            <FaXTwitter />

            {/* GitHub */}
            <FaGithub />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

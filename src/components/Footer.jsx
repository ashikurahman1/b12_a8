import React from 'react';
import FooterLogo from '/logo.png';
import { RiFacebookFill, RiLinkedinFill, RiTwitterXFill } from 'react-icons/ri';
const Footer = () => {
  return (
    <div className="bg-slate-900">
      <div className="py-9 text-white w-full lg:w-10/12 mx-auto px-5">
        {/* Footer Top */}
        <div className="flex items-start  flex-col md:flex-row justify-start md:justify-between gap-10 py-5">
          <div className="flex items-center gap-3">
            <img src={FooterLogo} alt="Footer Logo" className="w-10" />{' '}
            <span className="text-[16px]">HERO.IO</span>
          </div>
          <div>
            <h4 className="text-[16px] font-semibold">Social Icons</h4>
            <div className="flex gap-5 mt-5">
              <div className="flex items-center justify-center h-7 w-7 bg-white rounded-full text-black">
                <RiTwitterXFill />
              </div>
              <div className="flex items-center justify-center h-7 w-7 bg-white rounded-full text-black">
                <RiLinkedinFill />
              </div>
              <div className="flex items-center justify-center h-7 w-7 bg-white rounded-full text-black">
                <RiFacebookFill />
              </div>
            </div>
          </div>
        </div>
        <hr className="text-white my-5" />
        {/* Copyright */}
        <p className="text-center">
          Copyright &copy; 2025 - All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

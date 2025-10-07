import React from 'react';
import ErrorImage from '../../assets/error-404.png';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router';
const ErrorPage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen py-30 flex flex-col items-center bg-neutral-100 space-y-5">
        <img src={ErrorImage} alt="Error Image" />
        <h2 className="text-5xl font-semibold text-slate-900">
          Oops, page not found!
        </h2>
        <p className="text-[20px] text-slate-500">
          The page you are looking for is not available.
        </p>

        <Link to="/">
          <button
            className="text-white font-semibold px-3 py-2 lg:px-8 lg:py-3 rounded-md cursor-pointer mt-10"
            style={{
              background:
                'linear-gradient(145deg,rgba(99, 46, 227, 1) 0%, rgba(159, 98, 242, 1) 100%)',
            }}
          >
            Go Back!
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;

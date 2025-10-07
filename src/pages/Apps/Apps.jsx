import React from 'react';

const Apps = () => {
  return (
    <div className="bg-neutral-100 py-10 lg:py-20">
      <div className="w-full lg:w-10/12 mx-auto px-5">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-5xl font-bold text-black">Trending Apps</h2>
          <p className="mt-5 px-10 text-lg lg:text-xl text-slate-500">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-10">
          {/* Cards */}
          <div className="bg-white rounded-xl p-4 space-y-3">
            <div className="bg-gray-600 h-80 rounded-xl"></div>
            <h3 className="text-slate-900 font-medium text-[20px]">
              Forest: Focus
            </h3>
            <div className="flex justify-between items-center">
              <div className="py-2 px-4 font-medium rounded bg-lime-50 text-emerald-500 ">
                icon with users
              </div>
              <div className="py-2 px-4 font-medium rounded bg-orange-100 text-orange-500">
                Ratings
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;

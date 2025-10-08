import React from 'react';

const SkeletonLoader = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-10">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-white rounded-xl p-4 space-y-3 shadow-lg ">
          <div className="  h-80  skeleton rounded-xl"></div>
          <h3 className=" h-10 skeleton   rounded-xl font-medium text-[20px]"></h3>
          <div className="flex justify-between items-center">
            <div className="py-2 px-4 font-medium rounded skeleton w-18 h-8 "></div>
            <div className="py-2 px-4 font-medium rounded skeleton   w-18 h-8"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;

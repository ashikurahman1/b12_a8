import React, { useEffect, useState } from 'react';
import DownloadIcon from '../../assets/icon-downloads.png';
import RatingIcon from '../../assets/icon-ratings.png';
import { toast } from 'react-toastify';
const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState('none');
  useEffect(() => {
    const appsFromStorage =
      JSON.parse(localStorage.getItem('installedApp')) || [];
    setInstalledApps(appsFromStorage);
  }, []);

  const handleRemove = ItemId => {
    const removeItem = installedApps.filter(item => item.id !== ItemId);
    setInstalledApps(removeItem);
    localStorage.setItem('installedApp', JSON.stringify(removeItem));
    toast.error('App Uninstalled ');
  };

  const sortBySize = (() => {
    if (sortOrder === 'high-low') {
      return [...installedApps].sort((a, b) => b.size - a.size);
    } else if (sortOrder === 'low-high') {
      return [...installedApps].sort((a, b) => a.size - b.size);
    } else {
      return installedApps;
    }
  })();

  return (
    <div className="bg-neutral-100 min-h-screen py-20 px-6">
      <div className="w-full lg:w-10/12 mx-auto ">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-5xl font-bold text-black">Your Installed Apps</h2>
          <p className="mt-5 px-10 text-lg lg:text-xl text-slate-500">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 justify-between items-center my-5">
          <div>
            <h3 className="text-2xl font-semibold">
              {sortBySize.length} Apps Installed
            </h3>
          </div>
          <select
            className="select"
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by size</option>
            <option value="high-low">High-Low</option>
            <option value="low-high">Low-High</option>
          </select>
        </div>
        <div className="flex flex-col gap-6 ">
          {sortBySize.map(item => (
            <div
              key={item.id}
              className="p-4 bg-white rounded-2xl flex flex-col md:flex-row justify-between items-center"
            >
              <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-5">
                <img
                  src={item.image}
                  alt=""
                  className="w-20 h-20 rounded-md object-cover"
                />

                <div className="ml-5 space-y-4 mb-5">
                  <h3 className="text-xl font-medium text-slate-900">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-emerald-500">
                      <img
                        src={DownloadIcon}
                        alt="Download Icon"
                        className="w-4 h-4"
                      />
                      <span>{item.downloads.toString().slice(0, 2)}M</span>
                    </div>
                    <div className="flex items-center gap-2 text-orange-500">
                      <img
                        src={RatingIcon}
                        alt="Ratings Icon"
                        className="w-4 h-4"
                      />
                      <span>{item.downloads.toString().slice(0, 2)}M</span>
                    </div>

                    <p className="slate-500">{item.size} MB</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="bg-red-500 hover:bg-red-700 px-8 py-3 font-semibold text-white rounded-md cursor-pointer  transition"
              >
                Unistall
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;

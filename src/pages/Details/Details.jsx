import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDatas } from '../../Hooks/useDatas';

import DownloadIcon from '../../assets/icon-downloads.png';
import RatingIcon from '../../assets/icon-ratings.png';
import ReviewsIcon from '../../assets/icon-review.png';
import { toast } from 'react-toastify';
import Charts from '../../components/Charts';
import Loader from '../../components/Loader';
import NotFound from '../../components/NotFound';

const Details = () => {
  const [installed, setInstalled] = useState(false);
  const { id } = useParams();
  const { datas, loading } = useDatas();

  const filteredDatas = datas.find(item => item.id === Number(id));

  useEffect(() => {
    const installedApps =
      JSON.parse(localStorage.getItem('installedApp')) || [];
    const alreadyInstalled = installedApps.some(app => app.id === Number(id));
    if (alreadyInstalled) {
      setInstalled(true);
    }
  }, [id]);

  if (loading) return <Loader />;

  if (!filteredDatas && !loading) return <NotFound />;

  const handleInstall = item => {
    const installedApps =
      JSON.parse(localStorage.getItem('installedApp')) || [];

    const alreadyInstalled = installedApps.some(app => app.id === item.id);

    if (alreadyInstalled) {
      toast.error('App already installed');

      setInstalled(true);
      return;
    }
    installedApps.push(item);
    localStorage.setItem('installedApp', JSON.stringify(installedApps));
    toast.success('App installed successfully');
    setInstalled(true);
  };

  return (
    <div className="bg-neutral-100 ">
      <div className="w-full lg:w-10/12 mx-auto px-5 py-20">
        <div className="space-y-4 flex flex-col lg:flex-row gap-10">
          <div className="w-80 h-80 bg-gray-900 overflow-hidden shadow-md rounded-md">
            <img
              src={filteredDatas.image}
              alt=""
              className="w-full object-cover h-full"
            />
          </div>
          <div>
            <div className="space-y-3">
              <h3 className="text-3xl font-bold ">{filteredDatas.title} </h3>
              <p className="text-slate-500 text-[20px]">
                Developed by{' '}
                <span className="text-purple-700">
                  {filteredDatas.companyName}{' '}
                </span>
              </p>
            </div>
            <hr className="my-5 text-slate-300" />
            <div className="flex gap-10 flex-wrap">
              {/* Item 1*/}
              <div className="space-y-2">
                <img src={DownloadIcon} alt="Download" className="w-10" />
                <p className="text-slate-500">Downloads</p>
                <h3 className="text-4xl font-extrabold">
                  {filteredDatas.downloads.toString().slice(0, 2)}M
                </h3>
              </div>
              {/* Item 2*/}
              <div className="space-y-2">
                <img src={RatingIcon} alt="Download" className="w-10" />
                <p className="text-slate-500">Average Ratings</p>
                <h3 className="text-4xl font-extrabold">
                  {filteredDatas.ratingAvg}
                </h3>
              </div>
              {/* Item 3*/}
              <div className="space-y-2">
                <img src={ReviewsIcon} alt="Download" className="w-10" />
                <p className="text-slate-500">Total Reviews</p>
                <h3 className="text-4xl font-extrabold">
                  {filteredDatas.reviews.toString().slice(0, 2)}K
                </h3>
              </div>
            </div>
            {/* Buttons */}
            <button
              onClick={() => handleInstall(filteredDatas)}
              className={` px-8 py-3 font-semibold text-white rounded-md mt-6 cursor-pointer  transition ${
                installed
                  ? ' bg-gray-500 '
                  : 'bg-emerald-500 hover:bg-emerald-700'
              }`}
            >
              {installed
                ? `Installed`
                : ` Install Now (${filteredDatas.size} MB)`}
            </button>
          </div>
        </div>
        <hr className="space-y-10 my-10 text-slate-300" />
        {/* Ratings */}
        <div>
          <h3 className="text-2xl font-semibold">Ratings</h3>
          {/* Chart will be go here... */}
          <Charts ratings={filteredDatas.ratings} />
        </div>
        <hr className="space-y-10 my-10 text-slate-300" />
        {/* Description */}
        <div>
          <h3 className="text-2xl font-semibold">Description</h3>
          <p className="mt-5 text-slate-500">
            {filteredDatas.description}{' '}
            <span>
              Transform your ordinary photos into stunning masterpieces with
              {filteredDatas.title}, the ultimate all-in-one photo editing app
              designed for both professionals and beginners. Whether you’re
              enhancing portraits, retouching landscapes, or creating artistic
              effects for social media, {filteredDatas.title} gives you the
              tools, intelligence, and creativity to make every shot
              extraordinary. Built with next-generation AI technology,{' '}
              {filteredDatas.title}
              automatically analyzes your photos and applies intelligent
              enhancements that bring out natural color, balance exposure, and
              sharpen details — all with one tap. From simple edits to advanced
              retouching, you’ll find everything you need to achieve a
              professional look without complicated steps or steep learning
              curves.
            </span>
          </p>
          <p className="mt-10 text-slate-500">
            Transform your ordinary photos into stunning masterpieces with
            {filteredDatas.title}, the ultimate all-in-one photo editing app
            designed for both professionals and beginners. Whether you’re
            enhancing portraits, retouching landscapes, or creating artistic
            effects for social media, {filteredDatas.title} gives you the tools,
            intelligence, and creativity to make every shot extraordinary. Built
            with next-generation AI technology, {filteredDatas.title}
            automatically analyzes your photos and applies intelligent
            enhancements that bring out natural color, balance exposure, and
            sharpen details — all with one tap. From simple edits to advanced
            retouching, you’ll find everything you need to achieve a
            professional look without complicated steps or steep learning
            curves.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;

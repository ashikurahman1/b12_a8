import React from 'react';
import Hero from '../../components/Hero';
import Apps from '../Apps/Apps';
import { useDatas } from '../../Hooks/useDatas';
import Card from '../../components/Card';
import { Link } from 'react-router';

const Home = () => {
  const [datas] = useDatas();
  console.log(datas);

  const trandingApps = datas.slice(0, 8);

  return (
    <div>
      <Hero />
      {/* Featured Card */}
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
            {trandingApps.map(item => (
              <Card item={item} key={item.id} />
            ))}
          </div>
          <div className="flex justify-center ">
            <Link to="/apps">
              <button
                className="text-white font-semibold px-3 py-2 lg:px-8 lg:py-3 rounded-md cursor-pointer mt-10"
                style={{
                  background:
                    'linear-gradient(145deg,rgba(99, 46, 227, 1) 0%, rgba(159, 98, 242, 1) 100%)',
                }}
              >
                Show All
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

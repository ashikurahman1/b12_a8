import React, { useState } from 'react';
import Card from '../../components/Card';
import { useDatas } from '../../Hooks/useDatas';
import { RiSearchLine } from 'react-icons/ri';

const Apps = () => {
  const [datas] = useDatas();

  const [search, setSearch] = useState('');

  const userInput = search.trim().toLowerCase();

  const filterdItems = datas.filter(item =>
    item.title.toLowerCase().includes(userInput)
  );

  if (!filterdItems) return <p>App mo foud</p>;
  return (
    <div className="bg-neutral-100 min-h-screen py-10 lg:py-20">
      <div className="w-full lg:w-10/12 mx-auto px-5">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-5xl font-bold text-black">
            Our All Applications
          </h2>
          <p className="mt-5 px-10 text-lg lg:text-xl text-slate-500">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 justify-between items-center my-5">
          <div>
            <h3 className="text-2xl font-semibold">
              ({filterdItems.length}) Apps Found
            </h3>
          </div>
          <div className="w-full lg:w-1/3 p-2 rounded-md flex items-center gap-2 border-2 border-slate-300">
            <RiSearchLine className="text-slate-500" />
            <input
              value={search}
              className="w-full focus:outline-0"
              type="search"
              placeholder="search Apps"
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-10">
          {/* Cards */}

          {filterdItems.length > 0 ? (
            filterdItems.map(item => <Card item={item} key={item.id} />)
          ) : (
            <p className="text-3xl font-bold ">No App Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Apps;

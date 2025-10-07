import Star from '../assets/icon-ratings.png';
import Download from '../assets/icon-downloads.png';
import { Link } from 'react-router';

const Card = ({ item }) => {
  return (
    <Link to={`/details/${item.id}`}>
      <div className="bg-white rounded-xl p-4 space-y-3 shadow-lg hover:-translate-y-1.5 hover:shadow-2xl transition overflow-hidden">
        <div className="bg-gray-600 h-80 rounded-xl">
          <img
            src={item.image}
            alt={item.title}
            className="w-full object-cover h-80 rounded-xl"
          />
        </div>
        <h3 className="text-slate-900 font-medium text-[20px]">{item.title}</h3>
        <div className="flex justify-between items-center">
          <div className="py-2 px-4 font-medium rounded bg-lime-50 text-emerald-500 flex items-center gap-2 ">
            <img src={Download} alt="Downloads" className="w-4" />{' '}
            <span>{item.downloads.toString().slice(0, 2)} M </span>
          </div>
          <div className="py-2 px-4 font-medium rounded bg-orange-100 text-orange-500 flex items-center gap-2">
            <img src={Star} alt="Rating" className="w-4" />{' '}
            <span>{item.ratingAvg} </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;

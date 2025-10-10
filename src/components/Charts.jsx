import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

const Charts = ({ ratings }) => {
  const data = ratings.map(r => ({ name: r.name, counter: r.count })).reverse();

  return (
    <div className="my-5">
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{
            top: 5,
            right: 30,

            bottom: 5,
          }}
        >
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Bar dataKey="counter" fill="#A020F0" barSize={35} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;

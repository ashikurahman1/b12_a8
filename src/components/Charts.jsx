import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

const Charts = ({ ratings }) => {
  const data = ratings.map(r => ({ name: r.name, counter: r.count })).reverse();

  return (
    <div className="my-5">
      <ResponsiveContainer width="100%" height={600}>
        <ComposedChart
          layout="vertical"
          data={data}
          margin={{
            top: 10,
            right: 10,
            bottom: 10,
            left: 10,
          }}
        >
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />

          <Bar dataKey="counter" barSize={30} fill="#FF8811" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;

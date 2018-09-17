import React from 'react';
import BarChart from 'recharts/lib/chart/BarChart';
import Bar from 'recharts/lib/cartesian/Bar';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';

const data = [
  {name: 'Team 1', ts: 900, fs: 200, us: 700},
  {name: 'Team 2', ts: 900, fs: 350, us: 550},
  {name: 'Team 3', ts: 900, fs: 400, us: 500},
  {name: 'Team 4', ts: 900, fs: 500, us: 400},
  {name: 'Team 5', ts: 900, fs: 450, us: 450},
  {name: 'Team 6', ts: 900, fs: 250, us: 650},
];

function SimpleBarChart() {
  return (
    // 99% per https://github.com/recharts/recharts/issues/172
    <BarChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="name"/>
       <YAxis/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="ts" fill="#82ca9d" />
       <Bar dataKey="fs" fill="#8884d8" />
       <Bar dataKey="us" fill="#d8c175" />
    </BarChart>
  );
}

export default SimpleBarChart;
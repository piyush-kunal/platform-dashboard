import React from 'react';
import PieChart from 'recharts/lib/chart/PieChart';
import Pie from 'recharts/lib/polar/Pie';
// import Sector from 'recharts/lib/shape/Sector';
import Cell from 'recharts/lib/component/Cell';

// PieChart, Pie, Sector, Cell

const data = [
    {name: 'Group A', value: 400}, {name: 'Group B', value: 300},
    {name: 'Group C', value: 300}, {name: 'Group D', value: 200}
            ];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180; 

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x  = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy  + radius * Math.sin(-midAngle * RADIAN);

 return (
   <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
       {`${(percent * 100).toFixed(0)}%`}
   </text>
 );
};

// cx={300} 
// cy={200} 

function SimplePieChart() {
  return (
    <PieChart width={300} height={300} margine={{ top: 5, right: 5, bottom: 5, left: 5 }}>
        <Pie
          data={data} 
          cx='50%'
          cy='50%'
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100} 
          fill="#8884d8"
        >
        	{
          	data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
        
    </PieChart>
  );
}

export default SimplePieChart;
import React, {Fragment} from 'react';
import PieChart from 'recharts/lib/chart/PieChart';
import Pie from 'recharts/lib/polar/Pie';
// import Sector from 'recharts/lib/shape/Sector';
import Cell from 'recharts/lib/component/Cell';
import { Typography } from '@material-ui/core'

// PieChart, Pie, Sector, Cell

const data = [
    {name: 'Used Space', value: 30}, 
    {name: 'Free Space', value: 70},
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

export default props => {

  const newdata = props.data
  console.log('newData',{...newdata})

  return (
    <Fragment>
      <Typography variant="title" color="inherit" noWrap>Team 1 RO Statistics</Typography>
    <PieChart width={300} height={300} >
        <Pie
          data={data}
          dataKey='value'
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
    </Fragment>
  );
}

// export default SimplePieChart;

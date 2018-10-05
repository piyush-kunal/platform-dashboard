import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import PieChart from 'recharts/lib/chart/PieChart';
import Pie from 'recharts/lib/polar/Pie';
// import Sector from 'recharts/lib/shape/Sector';
import Cell from 'recharts/lib/component/Cell';
import { Card, CardContent, Typography } from '@material-ui/core'

// PieChart, Pie, Sector, Cell

const styles = theme => ({
  card: {
    padding: theme.spacing.unit * 1,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  title: {
    textAlign: 'left'
  },
  update: {
    marginBottom: 0
  }
});

// const data = [
//     {name: 'Used Space', value: 40}, 
//     {name: 'Free Space', value: 60},
//   ];

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
// label={renderCustomizedLabel}

function SimplePieChart(props) {
  const { classes, pieData } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} variant="headline" component="h2">
          {pieData.name}
        </Typography>
        <Typography className={classes.update} color="textSecondary">
          Used Space: {pieData.values[0].value.toFixed(2)} TB <br/>
          Free Space : {pieData.values[1].value.toFixed(2)} TB
        </Typography>
      </CardContent>
      <PieChart width={300} height={300} >
          <Pie
            data={pieData.values}
            dataKey='value'
            cx='50%'
            cy='50%'
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120} 
            fill="#8884d8"
          >
            {
              pieData.values.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
            }
          </Pie>
      </PieChart>
    </Card>
  );
}

SimplePieChart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimplePieChart)
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

const data = [
    {name: 'Used Space', value: 40}, 
    {name: 'Free Space', value: 60},
  ];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const RADIAN = Math.PI / 180; 

// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
//     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//     const x  = cx + radius * Math.cos(-midAngle * RADIAN);
//     const y = cy  + radius * Math.sin(-midAngle * RADIAN);

//  return (
//    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
//        {`${(percent * 100).toFixed(0)}%`}
//    </text>
//  );
// };

// cx={300} 
// cy={200} 
// label={renderCustomizedLabel}

function SimplePieChart(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} variant="headline" component="h2">
          Team 1
        </Typography>
        <Typography className={classes.update} color="textSecondary">
          Last update: 21/12/12
        </Typography>
      </CardContent>
      <PieChart width={300} height={300} >
          <Pie
            data={data}
            dataKey='value'
            cx='50%'
            cy='50%'
            labelLine={true}
            label
            outerRadius={120} 
            fill="#8884d8"
          >
            {
              data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
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
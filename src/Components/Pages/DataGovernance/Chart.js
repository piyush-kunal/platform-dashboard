import React ,{ Component } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import SimplePieChart from '../../Charts/SimplePieChart'
import SimpleBarChart from '../../Charts/SimpleBarChart'
import { parseTeamName, getROROWTeamDetails } from '../../utils'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Chart extends Component {
  // state = {
  //   spacing: '16',
  //   data: [
  //     [
  //       {name: 'Used Space', value: 30}, 
  //       {name: 'Free Space', value: 70}
  //     ],
  //     [
  //       {name: 'Used Space', value: 20}, 
  //       {name: 'Free Space', value: 80}
  //     ],
  //     [
  //       {name: 'Used Space', value: 25}, 
  //       {name: 'Free Space', value: 75}
  //     ],
  //     [
  //       {name: 'Used Space', value: 25}, 
  //       {name: 'Free Space', value: 75}
  //     ]
  //   ]
  //     }
  constructor(props) {
    super(props);
      this.state = {
        data: [],
        pieData: [],
        BarData: []
      }
    }
    
  async componentDidMount() {
    const data1 = await (await fetch('http://localhost:3004/ro_rw')).json()
    const chart = arr => {
      let temparr = [];
      let temp = {};
      arr.forEach(data => {
        temp = {
          'name': parseTeamName(data['team']),
          'values': [{ name: 'used_space', value: data['used_space'] },
          { name: 'free_space', value: data['free_space'] }]
        }
        temparr.push(temp)
      });
      return temparr;
    }
    const data = await (getROROWTeamDetails(data1))
    const pieData = await (chart(data))
    this.setState({ pieData })
    this.setState({ data })
  }
  render() {
    const { classes } = this.props;
    const { pieData, data } = this.state;
    return (
      <div className={classes.root}>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Plots</title>
        </Helmet>
        <Grid container spacing={24}>
        {pieData.map(item => {
          return (
            <Grid key={item.name} item xs={3}>
            <SimplePieChart pieData={item} />
          </Grid>
          )
        })}
          
          {/* <Grid item xs={3}>
            <SimplePieChart />
          </Grid> */}

          <Grid item xs={9}>
            <Paper className={classes.paper}><SimpleBarChart barData={data} /></Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Chart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Chart);


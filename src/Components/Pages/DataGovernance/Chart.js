import React ,{ Component } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import SimplePieChart from '../../Charts/SimplePieChart'
import SimpleBarChart from '../../Charts/SimpleBarChart'

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
  state = {
    spacing: '16',
    data: [
      [
        {name: 'Used Space', value: 30}, 
        {name: 'Free Space', value: 70}
      ],
      [
        {name: 'Used Space', value: 20}, 
        {name: 'Free Space', value: 80}
      ],
      [
        {name: 'Used Space', value: 25}, 
        {name: 'Free Space', value: 75}
      ],
    ]
      }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Plots</title>
        </Helmet>
        <Grid container spacing={24}>
        {/* {this.state.data.map((e)=> {
          <Grid key={e} item xs={3}>
          <Paper className={classes.paper}><SimplePieChart data={e} /></Paper>
        </Grid>
        })} */}
          
          <Grid item xs={3}>
            <SimplePieChart />
          </Grid>
          <Grid item xs={3}>
            <SimplePieChart />
          </Grid>
          <Grid item xs={3}>
            <SimplePieChart />
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper}><SimpleBarChart /></Paper>
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


import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import SimpleLineChart from '../../Charts/SimpleLineChart'
import TrendsFilterSearch from '../../Common/TrendsFilterSearch'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 10,
    marginBottom: 30
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Trends extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Trends</title>
        </Helmet>
        <TrendsFilterSearch />
        <Grid container spacing={24}>  
          <Grid item xs={12}>
            <Paper className={classes.paper}><SimpleLineChart /></Paper>
          </Grid>
        </Grid>
      </div>
    // <Fragment>
    //   <div className={styles.chartContainer}>
    //     <SimpleLineChart />
    //   </div>
    // </Fragment>
  )
}
}

Trends.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Trends);

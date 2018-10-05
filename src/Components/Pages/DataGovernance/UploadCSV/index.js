// import HorizontalLinearStepper from "./HorizontalLinearStepper";

// export { HorizontalLinearStepper }

import React ,{ Component } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'
import DropFile from './DropFile'

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

class index extends Component {
  
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <Helmet>
              <meta charSet="utf-8" />
              <title>Plots</title>
      </Helmet>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
           <h3> Upload CSV File </h3>
            <DropFile/>
          </Paper>
        </Grid>
      </Grid>
    </div>
    )
  }
}

index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(index);
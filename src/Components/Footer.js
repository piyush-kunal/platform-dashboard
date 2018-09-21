import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import { Typography, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    layout: {
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing.unit * 3,
    },
  });

const Footer = (props) => {
  const { classes } = props;
  console.log('class name', classes.footer)
  return (
    <Fragment>
    {/* <footer className={classes.footer}>
        <Typography variant="subheading" align="center" color="textSecondary" component="p">
          &copy; 2018 Piyush Kunal
        </Typography>
      </footer> */}

      <footer className={classNames(classes.footer, classes.layout)}>
        <Grid container spacing={32} justify="space-evenly">
          <Grid item xs>
            <Typography variant="subheading" color="textSecondary">
                &copy; 2018 Piyush Kunal
              </Typography>
          </Grid>
        </Grid>
      </footer>
    </Fragment>
  )
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
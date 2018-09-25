import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import { Typography, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    layout: {
      width: 'auto',
      marginLeft: theme.spacing.unit * 2,
      marginRight: theme.spacing.unit * 2,
      marginTop: theme.spacing.unit * 4,
    },
    footer: {
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 2,
    },
  });

const Footer = (props) => {
  const { classes } = props;
  console.log('class name', classes.footer)
  return (
    <Fragment>
      <footer className={classNames(classes.footer, classes.layout)}>
        <Grid container spacing={32} justify="space-evenly">
          <Grid item xs>
            <Typography variant="subheading" align="center" color="textSecondary" component="p">
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
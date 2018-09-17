import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles';

//backgroundColor: theme.palette.background.primary, 

const styles = theme => ({
    footer: {
      backgroundColor: '#651fff',
      padding: theme.spacing.unit * 3,
    },
  });

const Footer = (props) => {
  const { classes } = props;
  console.log('class name', classes.footer)
  return (
    <footer className={classes.footer}>
        <Typography variant="subheading" align="center" color="textSecondary" component="p">
          &copy; 2018 Piyush Kunal
        </Typography>
      </footer>
  )
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
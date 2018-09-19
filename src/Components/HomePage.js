import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { withStyles } from '@material-ui/core/styles';

import BigDataPlatform from './Pages/BigDataPlatform'
import OraclePlatform from './Pages/OraclePlatform'
import DataGovernance from './Pages/DataGovernance'
import SASPlatform from './Pages/SASPlatform'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    position: 'relative',
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }
});

const platforms = [
    {
        id: 1,
        name: 'SAS Platform',
        routes: 'sasp',
    },
    {
        id: 2,
        name: 'Oracle Platform',
        routes: 'odp'
    },
    {
        id: 3,
        name: 'Big Data Platform',
        routes: 'bdp'
    },
    {
        id: 4,
        name: 'Data Governance Platform',
        routes: 'dgp'
    }
];

function HomePage(props) {
  const { classes } = props;
  return (
    <React.Fragment>
    <CssBaseline />
      <div className={classNames(classes.layout)}>
          <div className={classes.root}>
            {platforms.map(platform => (
              <ButtonBase
                focusRipple
                key={platform.name}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                    width: '40%',
                    margin: '10px'
                }}
                component={Link}
                to={`/${platform.routes}`}
              >
              <span
                className={classes.imageSrc}
                style={{
                color: '#482880' 
                }}
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subheading"
                color="inherit"
                className={classes.imageTitle}
              >
                {platform.name}
                <span className={classes.imageMarked} />
              </Typography>
              </span>
            </ButtonBase>
            ))}
          </div>
       </div>
    </React.Fragment>
  );
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);
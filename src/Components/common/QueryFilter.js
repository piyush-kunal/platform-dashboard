import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TripOriginIcon from '@material-ui/icons/TripOrigin';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

class QueryFilter extends React.Component {
  state = {
    filter01: '',
    filter02: '',
    date:'',
    age: '',
    name: 'hai',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="filter01">Filter-01</InputLabel>
          <Select
            value={this.state.filter01}
            onChange={this.handleChange}
            inputProps={{
              name: 'filter01',
              id: 'filter01',
            }}
          >
            <MenuItem value="RO">RO</MenuItem>
            <MenuItem value="RW">RW</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="filter02">Filter-02</InputLabel>
          <Select
            value={this.state.filter02}
            onChange={this.handleChange}
            inputProps={{
              name: 'filter02',
              id: 'filter02',
            }}
          >
            <MenuItem value="RW">All Team </MenuItem>
            <MenuItem value="RO">Team 1</MenuItem>
            <MenuItem value="RW">Team 2</MenuItem>
            <MenuItem value="RW">Team 3</MenuItem>
            <MenuItem value="RW">Team 4</MenuItem>
            <MenuItem value="RW">Team 5</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            id="date"
            label="Birthday"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <Button variant="contained" color="primary" className={classes.button}>
            Enter
            <TripOriginIcon className={classes.rightIcon} />
          </Button>
        </FormControl>
      </form>
    );
  }
}

QueryFilter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QueryFilter);
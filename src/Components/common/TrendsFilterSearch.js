import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { InputLabel, MenuItem, FormControl, Select, TextField, Button, Grid, Paper } from '@material-ui/core';
import TripOriginIcon from '@material-ui/icons/TripOrigin';
import { getROROWTeamDetails } from '../utils'

const styles = theme => ({
  root1: {
    flexGrow: 1,
    paddingBottom: theme.spacing.unit * 3,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1,
    alignItem: 'right'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 200,
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
    margin: theme.spacing.unit * 3,
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

const path = [
    'RO', 
    'RW'
]

const teams = [
    'All',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6'
]


class TrrendsFilterSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            path: 'RO',
            teams: 'All',
            date: '2017-05-24',
            data: []
        };
      }

//   componentDidMount(){
//     // For initial data
//     this.fetchData();
//   }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  
  async fetchData() {
    const data1 = await (await fetch('http://localhost:3004/ro_rw')).json()
    const data = await getROROWTeamDetails(data1)
    this.setState({ data })
  }
//posts?title=json-server&author=typicode
  fetchData = () => {
    fetch(`http://localhost:3004/ro_rw/?team=/SAS/BIU/+'${'RO'}'+_TEAM3_1`, {
      method: "GET",
      dataType: "JSON",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      }
    })
    .then((resp) => {
      return resp.json()
    }) 
    .then((data) => {
      this.setState({ data }) 
      console.log(this.state.data)   
      this.props.onFetch(this.state.data)               
    })
    .catch((error) => {
      console.log(error, "catch the hoop")
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root1}>
      <Grid container spacing={24}>
      <form className={classes.root} onSubmit={this.handleSubmit} autoComplete="off">
        <TextField
          id="standard-select-ro-rw"
          name="path"
          select
          label="Select"
          className={classes.textField}
          value={this.state.path}
          onChange={this.handleChange}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select read write access"
          margin="normal"
        >
          {path.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-select-teams"
          name="teams"
          select
          label="Select"
          className={classes.textField}
          value={this.state.teams}
          onChange={this.handleChange}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select team"
          margin="normal"
        >
          {teams.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
            id="select-from-date"
            name="from-date"
            label="From Date"
            type="week"
            className={classes.textField}
            defaultValue={this.state.fromDate}
            InputLabelProps={{
              shrink: true,
            }}
            helperText="Please select from date"
            margin="normal"
          />
          <TextField
            id="select-to-date"
            name="to-date"
            label="To Date"
            type="date"
            className={classes.textField}
            defaultValue={this.state.toDate}
            InputLabelProps={{
              shrink: true,
            }}
            helperText="Please select to date"
            margin="normal"
          />
        <Button variant="contained" color="primary" onClick={this.fetchData} className={classes.button}>
            Search
            <TripOriginIcon className={classes.rightIcon} />
          </Button>
        {/* <FormControl className={classes.formControl}>
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
        </FormControl> */}
        {/* <FormControl className={classes.formControl}>
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
            label="Date"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl> */}
        <Grid item xs={2}>
        <FormControl className={classes.formControl}>
          
        </FormControl>
        </Grid>
      </form>
      </Grid> 
      </div>
    );
  }
}

TrrendsFilterSearch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TrrendsFilterSearch);
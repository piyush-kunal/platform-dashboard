import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MenuItem, FormControl, TextField, Button, Grid } from '@material-ui/core';
// import TripOriginIcon from '@material-ui/icons/TripOrigin';
// import { getROROWTeamDetails, createRegex } from '../utils'
import CircularProgress from '@material-ui/core/CircularProgress';


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
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
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


class FilterSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            path: 'RO',
            teams: 'All',
            date: '2017-05-24',
            data: [],
            isLoading: false
        };
      }

//   componentDidMount(){
//     // For initial data
//     this.fetchData();
//   }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  
//   async fetchData() {
//     const data1 = await (await fetch('http://localhost:3004/ro_rw')).json()
//     const data = await getROROWTeamDetails(data1)
//     this.setState({ data })
//   }
//posts?title=json-server&author=typicode
  fetchData = () => {
    this.setState({ isLoading: true });
    
    fetch(`http://localhost:3004/ro_rw?team_like=${this.state.path}_TEAM${this.state.teams} `, {
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
      this.props.onFetch(this.state.data) 
      setTimeout(()=> this.setState({isLoading: false}), 1000)
      
               
    })
    .catch((error) => {
      console.log(error, "catch the error")
      this.setState({isLoading: false})
    })
  }

//   .then((data) => {
//     const r = createRegex(this.state.path, this.state.teams)
//     return getROROWTeamDetails(data, r)
// })

  render() {
    const { classes } = this.props;
    const { isLoading } = this.state

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
            id="select-date"
            name="date"
            label="Date"
            type="date"
            className={classes.textField}
            defaultValue={this.state.date}
            InputLabelProps={{
              shrink: true,
            }}
            helperText="Please select date"
            margin="normal"
          />
          {!isLoading && 
            <Button variant="contained" color="primary" onClick={this.fetchData} className={classes.button}>
            Search
           
            {/* {!isLoading &&  <TripOriginIcon className={classes.rightIcon} />} */}
            {isLoading && <CircularProgress size={24} className={classes.buttonProgress} thickness={7} />}
        
          </Button>
          }
           {isLoading && 
            <Button variant="contained"  onClick={this.fetchData} className={classes.button}>
            Search
           
            {/* {!isLoading &&  <TripOriginIcon className={classes.rightIcon} />} */}
            {isLoading && <CircularProgress size={24} className={classes.buttonProgress} color="primary" thickness={7} />}
        
          </Button>
          }
          
       
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

FilterSearch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilterSearch);
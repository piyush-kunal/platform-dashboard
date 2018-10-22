import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import { parseTeamName } from '../utils'

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    marginBottom:20
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  linearProgressBar: {
    flexGrow: 1
  }
});

// let id = 0;
// function createData(name, calories, fat, carbs, protein) {
//   id += 1;
//   return { id, name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

function SimpleTable(props) {
  const { classes, data, load } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Team</CustomTableCell>
            <CustomTableCell numeric>Total Space (in TB)</CustomTableCell>
            <CustomTableCell numeric>Used Space (in TB)</CustomTableCell>
            <CustomTableCell numeric>Free Space (in TB)</CustomTableCell>
            <CustomTableCell numeric>Area Name</CustomTableCell>
            <CustomTableCell numeric>Percentage (%)</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => {
            return (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell component="th" scope="row">
                  {parseTeamName(row.team)}
                </CustomTableCell>
                <CustomTableCell numeric>{row.total_space}</CustomTableCell>
                <CustomTableCell numeric>{row.used_space}</CustomTableCell>
                <CustomTableCell numeric>{row.free_space}</CustomTableCell>
                <CustomTableCell numeric>{row.area_name}</CustomTableCell>
                <CustomTableCell numeric>{row.percentage}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {load && <div className={classes.linearProgressBar}><LinearProgress /></div>}
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);

import React, { Component } from 'react'
import { Route,  Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BarChart from '@material-ui/icons/BarChart';
import TableChart from '@material-ui/icons/TableChart';
import CloudUpload from '@material-ui/icons/CloudUpload';
import TrendingUp from '@material-ui/icons/TrendingUp';

import Trends from './Pages/DataGovernance/Trends'
import Chart from './Pages/DataGovernance/Chart'
import Tables from './Pages/DataGovernance/Tables'
import { Table } from '@material-ui/core';


export const dashboardViewItems = (
  <div>
    <ListItem component={Link} to="/dgp/charts" button>
      <ListItemIcon>
        <BarChart />
      </ListItemIcon>
      <ListItemText primary="Plots" />
    </ListItem>
    <ListItem component={Link} to="/dgp/tables" button>
      <ListItemIcon>
        <TableChart />
      </ListItemIcon>
      <ListItemText primary="Table" />
    </ListItem>
    <ListItem component={Link} to="/dgp/trends" button>
      <ListItemIcon>
        <TrendingUp />
      </ListItemIcon>
      <ListItemText primary="Weekly Trends" />
    </ListItem>
    <ListItem component={Link} to="/"  button>
      <ListItemIcon>
        <CloudUpload />
      </ListItemIcon>
      <ListItemText primary="Upload Docs" />
    </ListItem>
  </div>
);



// export default class tileData extends Component {
//   render() {
//     return (
//       <div>
//     <ListItem component={Link} to="/dgp/charts" button>
//       <ListItemIcon>
//         <BarChart />
//       </ListItemIcon>
//       <ListItemText primary="Plots" />
//     </ListItem>
//     <ListItem component={Link} to="/dgp/tables" button>
//       <ListItemIcon>
//         <TableChart />
//       </ListItemIcon>
//       <ListItemText primary="Table" />
//     </ListItem>
//     <ListItem component={Link} to="/dgp/trends" button>
//       <ListItemIcon>
//         <TrendingUp />
//       </ListItemIcon>
//       <ListItemText primary="Weekly Trends" />
//     </ListItem>
//     <ListItem component={Link} to="/"  button>
//       <ListItemIcon>
//         <CloudUpload />
//       </ListItemIcon>
//       <ListItemText primary="Upload Docs" />
//     </ListItem>
//   </div>
//     )
//   }
// }


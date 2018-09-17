export * from './Sidebar';import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BarChart from '@material-ui/icons/BarChart';
import TableChart from '@material-ui/icons/TableChart';
import CloudUpload from '@material-ui/icons/CloudUpload';
import TrendingUp from '@material-ui/icons/TrendingUp';

export const dashboardViewItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <BarChart />
      </ListItemIcon>
      <ListItemText primary="Plots" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <TableChart />
      </ListItemIcon>
      <ListItemText primary="Table" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <TrendingUp />
      </ListItemIcon>
      <ListItemText primary="Weekly Trends" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CloudUpload />
      </ListItemIcon>
      <ListItemText primary="Upload Docs" />
    </ListItem>
  </div>
);
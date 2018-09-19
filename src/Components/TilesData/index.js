import React, { Fragment } from 'react'
import { Route,  Link } from 'react-router-dom'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { BarChart, TableChart, CloudUpload, TrendingUp } from '@material-ui/icons'

export default props => {
  console.log('tile data', props)
  return (
    <Fragment>
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
  </Fragment>
  )
}

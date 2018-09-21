import React, { Fragment } from 'react'
import { Route } from 'react-router-dom';
import QueryFilter from '../../Common/QueryFilter'
import ChartComponent from './Chart';
import Tables from './Tables';
import Trends from './Trends';

export default ({match}) => {
  // console.log('DataGovernace', props)
  return (
    <Fragment>
      <QueryFilter />
      <Route path={`${match.path}/charts`} component={ChartComponent} />
      <Route path={`${match.path}/tables`} component={Tables} />
      <Route path={`${match.path}/trends`} component={Trends} />
    </Fragment>
  )
}

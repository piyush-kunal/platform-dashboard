import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
// import QueryFilter from '../../Common/QueryFilter'
// import FilterSearch from '../../Common/FilterSearch'
import ChartComponent from './Chart'
import Tables from './Tables'
import Trends from './Trends'
import UploadCSV from './UploadCSV'
import SearchDocs from './SearchDocs'

export default ({match}) => {
  return (
    <Fragment>
      {/* <QueryFilter /> */}
      {/* <FilterSearch /> */}
      <Route path={`${match.path}/charts`} component={ChartComponent} />
      <Route path={`${match.path}/tables`} component={Tables} />
      <Route path={`${match.path}/trends`} component={Trends} />
      <Route path={`${match.path}/uploadcsv`} component={UploadCSV} />
      <Route path={`${match.path}/searchDocs`} component={SearchDocs} />
    </Fragment>
  )
}

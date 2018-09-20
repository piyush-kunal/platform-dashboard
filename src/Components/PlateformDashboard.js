import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Footer from './Footer'
import Dashboard from './Dashboard'
import HomePage from './HomePage'
import Layout from './Layout'

import BigDataPlatform from './Pages/BigDataPlatform'
import OraclePlatform from './Pages/OraclePlatform'
import DataGovernance from './Pages/DataGovernance'
import SASPlatform from './Pages/SASPlatform'

export default class PlateformDashboard extends Component {
  constructor(props){
    super(props);
    const { match: {url} } = this.props
    console.log('platformdashboard', url)
  }
  render() {
    
    return ( 
        <Layout>
          
            <Route exact path="/" component={HomePage} />
            <Route path="/dgp" render={props => <DataGovernance {...props} />}/>
            <Route path="/bdp" render={props => <BigDataPlatform {...props} />}/>
            <Route path="/odp" component={OraclePlatform}/>
            <Route path="/sasp" component={SASPlatform}/>
          
          <Dashboard />
          <Footer />
        </Layout>
     
    )
  }
}

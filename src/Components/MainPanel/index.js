import React from 'react'
import { Route } from 'react-router-dom'
import Footer from '../Footer'
import Layout from '../Layout'
import HomePage from '../HomePage'
import BigDataPlatform from '../Pages/BigDataPlatform'
import OraclePlatform from '../Pages/OraclePlatform'
import DataGovernance from '../Pages/DataGovernance'
import SASPlatform from '../Pages/SASPlatform'

export default props => {
  return (
    <div>
        <Layout {...props}>        
          <Route exact path="/" component={HomePage} />
          <Route path="/dgp" render={props => <DataGovernance {...props} />}/>
          <Route path="/bdp" render={props => <BigDataPlatform {...props} />}/>
          <Route path="/odp" component={OraclePlatform}/>
          <Route path="/sasp" component={SASPlatform}/>
        <Footer style={{padding: '8px 0px',}} />
      </Layout>     
    </div>
  )
}

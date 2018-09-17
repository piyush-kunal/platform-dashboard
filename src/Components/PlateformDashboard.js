import React, { Component } from 'react'
// import { Router, Link } from 'react-router-dom'
import Footer from './Footer'
import Dashboard from './Dashboard'
import HomePage from './HomePage'

export default class PlateformDashboard extends Component {
  render() {
    return ( 
        <div>
            <HomePage/>
          {/* <Dashboard /> */}
          <Footer />
        </div>
     
    )
  }
}

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

import PlateformDashboard from './Components/PlateformDashboard'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'

import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory()

const fakeAuth = {
  isAuthenticated: true,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

class App extends Component {
  render() {
    return (
      <div>
       
          <Router history={customHistory}>
              <div>
                  <PrivateRoute exact path="/" component={PlateformDashboard} />
                  <Route path="/login" component={Login}/>

                  {/* <Route path="/register"/> */}

                  <Route exact path={`/dgp`} component={Dashboard} />
                  {/* <Route exact path={`/dgp/trends`} component={Dashboard} />
                  <Route exact path={`/dgp/plots`} component={Dashboard} />
                  <Route exact path={`/dgp/tables`} component={Dashboard} />
                  <Route exact path={`/dgp/upload`} component={Dashboard} /> */}
              </div>
          </Router>
       
      </div>
      
    );
  }
}

export default App;

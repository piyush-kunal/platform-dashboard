import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Login from './Login'
import MainPanel from './MainPanel'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  // componentDidMount() {
  //   /**
  //    * fetch('/user/me').then(resp => resp.json()).then(user => {
  //    *  if (user && user.id) {
  //    *    this.setState({
  //    *      user,
  //    *    });
  //    *  }
  //    * }).catch();
  //    */
  //   setTimeout(() => {
  //     this.setState({
  //       user: {
  //         id: 1,
  //       }
  //     });
  //   }, 5000);
  // }

  onLogin = (user, password) => {
    this.setState({
      user: {
        id: 1,
        user: user,
      }
    });
  };

  render() {
    if (!this.state.user) {
      return <Login onLogin={this.onLogin} />;
    }
    return (
      <div>
        <Route path="/" render={props => <MainPanel {...props} />}/>
      </div>
    );
  }
}

export default App;

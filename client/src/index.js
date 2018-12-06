import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App.jsx';
import PopSignUp from './PopSignUp.js';
import PopSignIn from './PopSignIn.js';
import UserDashboard from './UserDashboard.jsx';
import * as serviceWorker from './serviceWorker';
import Advertiser from './components/Advertiser.jsx';

import { Router, Route, browserHistory } from 'react-router';
import AddItem from './components/AddItemComp.jsx';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router history={browserHistory}>
          <Route path="/" component={App} >
            <Route path="/sign-in" exact component={PopSignIn} />
            <Route path="/sign-up" exact component={PopSignUp} />
          </Route>
          <Route path="/c/:id" exact component={UserDashboard} />
          <Route path="/adv-profile/:id" exact component={Advertiser} />
      </Router>
    );
  }
}


ReactDOM.render(<Home/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

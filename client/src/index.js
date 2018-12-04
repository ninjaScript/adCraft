import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App.jsx';
import PopSignUp from './PopSignUp.js';
import PopSignIn from './PopSignIn.js';
import UserDashboard from './UserDashboard.jsx';
import * as serviceWorker from './serviceWorker';
import AdvertiserStore from './components/advertiser_store.jsx';
import AdvertiserGridList from './components/advertiser_grid_list.jsx'
import { Router, Route, browserHistory } from 'react-router';

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
          <Route path="/user-dashboard/:id" exact component={UserDashboard} />
      </Router>
    );
  }
}


ReactDOM.render(<Home/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

import React, { Component } from 'react';
import './style/App.css';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
class App extends Component {
  render() {
  	const style = {display:"flex", justifyContent: "center"}
    return (
       <div className="App">
         <SignIn />
       </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './style/App.css';
import PopSignUp from './PopSignUp.js';
import PopSignIn from './PopSignIn.js';
import Header from './components/Header.jsx';
import Video from './components/Video.jsx';
import { Grid } from '@material-ui/core';
import Category from './Category.js';
import ItemList from './itemList.js';
import Footer from "./Footer.js";
//App component for Rendering Usage User experience
class App extends Component {
  constructor(props) {
    super(props);
    // state to open and close modal effect by onclick button for sign in and out
    this.state = {
      isOpenSignUp: false,
      isOpenSignIn: false
    };
  }

  // setstate for initial render (sign up)
  toggleSignup = () => {
    this.setState({
      isOpenSignUp: !this.state.isOpenSignUp,
      isOpenSignIn: false
    });
  }

  // setstate for initial render (Log In)
  toggleLogin = () => {
    this.setState({
      isOpenSignIn: !this.state.isOpenSignIn,
      isOpenSignUp: false
    });
  }


  // Imaging experience for DOM appearance containing header, video, and other components with react base functionality
  render() {
    return (
      <Grid container spacing={16} className="container center">
        <Grid item xs={12}>
          <Header toggleSignup={this.toggleSignup} toggleLogin={this.toggleLogin} />
        </Grid>
        <Grid item xs={12}>
          <Video />
        </Grid>
        <PopSignUp show={this.state.isOpenSignUp} onClose={this.toggleSignup}></PopSignUp>
        <PopSignIn show={this.state.isOpenSignIn} onClose={this.toggleLogin}></PopSignIn>
      </Grid>
      <div>
        <div className="category">
        <Category/>
        </div>
        <div className="border">
          <h3>ADCRAFT'S LATEST PRODUCTS</h3>
        </div>
        <div>
        <ItemList/>
        </div>
        <Footer/>
        </div>
    );

  }
}

// export for usage
export default App;

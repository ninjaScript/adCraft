import React, { Component } from 'react';
import './style/App.css';
import PopSignUp from './PopSignUp.js';
import PopSignIn from './PopSignIn.js';
import Header from './components/Header.jsx';
import Video from './components/Video.jsx';
import { Grid } from '@material-ui/core';
import Category from './components/Category.js';
import ItemList from './components/itemList.js';
import Footer from "./components/Footer.js";
import Community from "./components/Community.js";

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
      <Grid class="parallax">
      <Grid container spacing={16} className="container center">
        <Grid item xs={12}>
          <Header toggleSignup={this.toggleSignup} toggleLogin={this.toggleLogin} />
        </Grid>
        <Grid item xs={12}>
          <Video />
        </Grid>
       
        <Grid className="category">
        <Grid item xs className="quote" style={{marginLeft: "350px"}}>
          <h1 id="topQuote" style={{marginTop: "100px", marginBottom: "55px"}}>Challenge your business.<span id="topQuote" style={{color:"#006789"}}> Advertise</span>. Stay motivated.</h1>
        </Grid>
          <Category />
        </Grid>
        <Grid className="border">
          <h3>ADCRAFT'S LATEST PRODUCTS</h3>
        </Grid>
        <Grid>
          <ItemList />
          <h1 align="center" id="topQuote" style={{marginTop: "90px", marginBottom: "-30px"}}>Tap into a fast-growing community of millions of business enthusiasts of all levels from 120+ advertisers</h1>
          <Community/>
        </Grid>
        <PopSignUp show={this.state.isOpenSignUp} onClose={this.toggleSignup}></PopSignUp>
        <PopSignIn show={this.state.isOpenSignIn} onClose={this.toggleLogin}></PopSignIn>
        
      
      </Grid>
      <Footer />
      </Grid>
    );
  }
}

// export for usage
export default App;

import React, { Component } from 'react';
import './style/App.css';
import video from './style/cooking.mp4';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Signup from './Signup.js';
import Login from './Login.js';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import Category from './Category.js';
import ItemList from './itemList.js';
import Footer from "./Footer.js";

//App component for Rendering Usage User experience
class App extends Component {
  constructor(props) {
    super(props);
    // state to open and close modal effect by onclick button for sign in and out
    this.state = { isOpenSignUp: false, isOpenSignIn: false };
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
      <body>
        <div className="container center">
          <nav className="menu">
            <h1 className="menu__logo">adCraft</h1>
              <div className="menu__right">
                <ul className="menu__list">
                    <li className="menu__list-item"><a className="menu__link" href="https://www.facebook.com/ad.craft.79"><i className="fa fa-facebook fa-lg"></i></a></li>
                    <li className="menu__list-item"><a className="menu__link" href="https://www.instagram.com/adcraft_advertisement/?hl=en"><i className="fa fa-instagram fa-lg"></i></a></li>
                    <li className="menu__list-item"><a className="menu__link" href="https://twitter.com/adCraft20"><i className="fa fa-twitter fa-lg"></i></a></li>
                    
                    <li className="menu__list-item"><a className="menu__link" href="#" onClick={this.toggleLogin}>Login</a></li>
                    <li className="menu__list-item"><a className="menu__link"  href="#" onClick={this.toggleSignup}>SIGN UP</a></li>
                </ul>
             </div>
          </nav>
          <div className="video-container">
            <video width="300" height="200" loop autoPlay>
              <source src={video} type="video/mp4" />
            </video>
          <div className="content">
          <form action="USER" className="flex-item">
            <button id="myBtn">USER</button>
          </form>
          <form action="ADVERTISER" className="flex-item">
            <button id="myBtn">ADVERTISER</button>
          </form>
          </div>
          </div>
          <div>
           <Signup show={this.state.isOpenSignUp}  onClose={this.toggleSignup}></Signup>
           <Login show={this.state.isOpenSignIn}  onClose={this.toggleLogin}></Login>
           <div className="category">
           <Category/>
           </div>
           <div className="border">
             <h3>ADCRAFT'S LATEST PRODUCTS</h3>
          </div>
          <ItemList/>
           </div>
           </div> 
           <Footer/>
      </body>
    );
  }
}

// export for usage
export default App;

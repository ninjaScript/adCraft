import React, { Component } from 'react';
import './style/App.css';
import video from './style/cooking.mp4';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Modal from './Modal';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (

        <div className="container center">
          <nav className="menu">
            <h1 className="menu__logo">adCraft</h1>
              <div className="menu__right">
                <ul className="menu__list">
                    <li className="menu__list-item"><a className="menu__link" href="#"><i className="fa fa-facebook fa-lg"></i></a></li>
                    <li className="menu__list-item"><a className="menu__link" href="#"><i className="fa fa-instagram fa-lg"></i></a></li>
                    <li className="menu__list-item"><a className="menu__link" href="#"><i className="fa fa-twitter fa-lg"></i></a></li>
                    
                    <li className="menu__list-item"><a className="menu__link" href="#">Login</a></li>
                    <li className="menu__list-item"><a className="menu__link" href="#" onClick={this.toggleModal}>SIGN UP</a></li>
                      <Modal show={this.state.isOpen}  onClose={this.toggleModal}></Modal>
                </ul>
             </div>
          </nav>
          <div className="video-container">
            <video width="300" height="200" loop autoPlay>
              <source src={video} type="video/mp4" />
            </video>
            <div className="content">
              <button id="myBtn">USER</button>
              <button id="myBtn1">ADVERTISER</button>
            </div>
         </div>
    </div>
       
    );
  }
}


export default App;

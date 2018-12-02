import React, { Component } from 'react';
import './style/App.css';
import video from './style/cooking.mp4';


class App extends Component {
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
                    <li className="menu__list-item"><a className="menu__link" href="#">SIGN UP</a></li>
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

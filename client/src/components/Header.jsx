// { /*************************************** Header Component  *********************************/}
import React from 'react';
import { Grid } from '@material-ui/core';
import '../style/App.css';
import {Link} from 'react-router'

// header component with statemess functionality, Sign in and Log in included as a modal functionality in this component
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
 
  // icons and links included to be rendered and declairing classes for css usage
  render() {
    return (
      <Grid>
        <nav className="menu">
          <h1 className="menu__logo">adCraft</h1>
          <Grid className="menu__right">
            <ul className="menu__list">
              <li className="menu__list-item"><a className="menu__link" href="https://www.facebook.com/ad.craft.79"><i className="fa fa-facebook fa-lg"></i></a></li>
              <li className="menu__list-item"><a className="menu__link" href="https://www.instagram.com/adcraft_advertisement/?hl=en"><i className="fa fa-instagram fa-lg"></i></a></li>
              <li className="menu__list-item"><a className="menu__link" href="https://twitter.com/adCraft20"><i className="fa fa-twitter fa-lg"></i></a></li>
              <li className="menu__list-item"><Link to ="/sign-in" activeClassName={{color:"red"}}  className="menu__link"  onClick={this.props.toggleLogin}>Login</Link></li>
              <li className="menu__list-item"><Link to ="/sign-up" activeClassName={{color:"red"}}  className="menu__link"  onClick={this.props.toggleSignup}>Sign up as user</Link></li>
              <li className="menu__list-item"><Link to ="/signup-adv" activeClassName={{color:"red"}}  className="menu__link"  onClick={this.props.toggleSignup}>Sign up as advertiser</Link></li>

            </ul>
          </Grid>
        </nav>
      </Grid>
    )
  }
}
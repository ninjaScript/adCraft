import React from 'react';
import { stack as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="#">
        About Us
      </a>

      <a className="menu-item" href="#">
        Advertisers
      </a>

      <a className="menu-item" href="#">
        Products
      </a>

      <a className="menu-item" href="#">
        Stores
      </a>

      <a className="menu-item" href="#">
        Contact Us
      </a>
    </Menu>
  );
};
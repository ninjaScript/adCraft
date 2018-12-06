import React from 'react';
import '../style/App.css';
import video from '../style/finalintro.mp4';
import { Button } from '@material-ui/core';
export default class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="video-container">
        <video width="300" height="200" loop autoPlay>
          <source src={video} type="video/mp4"/>
        </video>
        <div spacing={16} className="content">
          <span className="titleDesc">adCraft a big community for crafty homemade products </span>
        </div>
      </div>
    )
  }
}
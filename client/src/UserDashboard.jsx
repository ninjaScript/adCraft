import React from 'react';
import './style/App.css';

export default class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
    <div>
        <h1>Hello in main page {this.props.location.state.user.firstName }</h1>
    </div>
    )
  }
}
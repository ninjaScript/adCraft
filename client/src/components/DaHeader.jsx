import React from 'react';
import '../style/App.css';
import {AppBar, Typography, Toolbar, Button} from "@material-ui/core";

export default class DaHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  logout(){
    this.props.logout();
    console.log("you are logout now")
  }
  
  render() {
    const username = this.props.user.firstName + " " + this.props.user.lastName;
    return (
      <div style={{ flexGrow: "1" }}>
        <AppBar position="static" style={{ "background": "#006789" }}>
          <Toolbar >
            {/* <IconButton color="inherit" aria-label="Menu" style={{ marginLeft: -12, marginRight: 20, }} >
              <MenuIcon />
            </IconButton> */}
            <Typography variant="headline" color="inherit" style={{ flexGrow: "1" ,  marginLeft: "90px"}} >adCraft</Typography>
            <Typography variant="subtitle1" color="inherit">{username}</Typography>
            <Button color="inherit" onClick = {this.logout.bind(this)}> Logout</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
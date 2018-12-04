import React from 'react';
import '../style/App.css';
import {AppBar, Typography, Toolbar, Button} from "@material-ui/core";

export default class DaHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
   
    return (
      <div style={{ flexGrow: "1" }}>
        <AppBar position="static" style={{ "background": "#006789" }}>
          <Toolbar >
            {/* <IconButton color="inherit" aria-label="Menu" style={{ marginLeft: -12, marginRight: 20, }} >
              <MenuIcon />
            </IconButton> */}
            <Typography variant="headline" color="inherit" style={{ flexGrow: "1" ,  marginLeft: "90px"}} >adCraft</Typography>
            <Typography variant="subtitle1" color="inherit">Mohammad Rawashdah</Typography>
            <Button color="inherit"> Logout</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import {
  Typography, List, ListItem, Divider, ListItemText
} from "@material-ui/core";
// from react-burger-menu dependency for effecient usage
export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false }
  }

  // this function to specify the selected item and 
  //close the sidemenu after select 
  handleMenuOpen(id) {
    this.setState({ isOpen: false })
    this.props.handleonClickSideList(id);

  }

  render() {
    return (
      // Initial sample Line up for Main page usage
      <Menu isOpen={this.state.isOpen}>
        <List  component="nav" >
          <Typography variant="headline" >Categories</Typography>
          <Divider />
          {this.props.data.map((category) =>
            <ListItem key={category} button 
              // to chose the select item
              onClick={this.handleMenuOpen.bind(this, category.id)}>
              <ListItemText primary={category.name} />
            </ListItem>
          )
          }
        </List>
      </Menu>
    );
  }
}
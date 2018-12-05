import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import {Typography,List , ListItem, Divider, ListItemText
} from "@material-ui/core";
// from react-burger-menu dependency for effecient usage
export default class Sidebar extends React.Component {
   constructor (props) {
      super(props);
      this.state = {isOpen : false}
   }

   handleMenuOpen(){
     this.setState({isOpen: false})
   }
  render () {
    return (
      // Initial sample Line up for Main page usage
      <Menu isOpen = {this.state.isOpen}>
       <List component = "nav" >
       <Typography variant= "headline" >Categories</Typography>
       <Divider />
         <ListItem button onClick = {this.handleMenuOpen.bind(this)}>
          
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem button onClick = {this.handleMenuOpen.bind(this)}>
          
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem button onClick = {this.handleMenuOpen.bind(this)}>
          <ListItemText primary="Drafts" />
        </ListItem>
       </List>
      </Menu>
    );
  }
}
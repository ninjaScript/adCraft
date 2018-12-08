import React from "react";
import "../style/styles.css";
import {
  Button,
  FormControl
} from "@material-ui/core";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';



const styles = theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});



class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDrop: false,
      category: ""
    };
  };

  //might be wrong
  handleChangeDrop(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.props.getCategoryId(event.target.value)
  };
  handleCloseDrop() {
    this.setState({ openDrop: false });
  };
  handleOpenDrop() {
    this.setState({ openDrop: true });
  };

  render() {
    const { classes } = this.props;
    return (
      <form autoComplete="off">
        <Button className={classes.button} onClick={this.handleOpenDrop.bind(this)}>
          Choose Category
        </Button>
        <FormControl fullWidth className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select">
             Select your category
          </InputLabel>
          <Select required={true}
            open={this.state.open}
            onClose={this.handleCloseDrop.bind(this)}
            onOpen={this.handleOpenDrop.bind(this)}
            value={this.state.category}
            onChange={this.handleChangeDrop.bind(this)}
            inputProps={{
              name: 'category',
              id: 'demo-controlled-open-select',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {
              this.props.categories.map((category) =>(
                <MenuItem value={category.id}>
                  {category.name}
                 </MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </form>
    )
  }
}




DropDown.propTypes = {
  classes: PropTypes.object.isRequired,
}


export default withStyles(styles)(DropDown);
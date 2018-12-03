import React from "react";
import "../style/styles.css";
import {
  Paper,
  Button,
  TextField,
  FormControl,
  Typography
} from "@material-ui/core";
import PNG from '../style/signup.png';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: "",
      password: "",
      errorPhone: "",
      errorPassword: "",
      validation: false
    };
  }
  // this function to deal eith the textField and get the data
  handleChange(e) {
    let target = e.target;
    this.setState({ [target.name]: target.value });
    console.log(this.state[target.name]);

    // validation to  phone number
    if (this.state.phoneNumber.length < 10) {
      this.setState({
        errorPhone: "The phone number in this format 0790011200",
        validation: false
      });
    } else {
      this.setState({
        errorPhone: "",
        validation: true
      });
    }
    // validation to  password
    if (this.state.password.length < 8) {
      this.setState({
        errorPassword: "The password should be more than 8 character!",
        validation: false
      });
    } else {
      this.setState({
        errorPassword: "",
        validation: true
      });
    }
  }

  // handle when click to send info to server
  handleOnClick() {
    // if the validation true  send data
    if (!this.state.validation) {
      console.log(this.state);
    } else {

    }
  }
  render() {
    // const style = {
    //   padding: "15px",
    //   margin: "40px",
    //   maxWidth: "500px"
    // };
    // const btnStyle = { padding: "10px", marginTop: "10px", fontSize: "18px" };
    // const container = {
    //   display: "flex",
    //   justifyContent: "center",
    //   alignItems: "center"
    // };
    return (
      <div className="container1">
        <Paper className="style1">
          <div>
          <img src={PNG} width="100" height="100"/>
            <Typography className="_Signin" variant="display2" align="center" color="primary" style={{"color": "#006789"}}>
              Login
            </Typography>
          </div>
          <form onSubmit={this.handleOnClick.bind(this)}>
            <TextField
              fullWidth
              label="Phone Number"
              type="tel"
              required={true}
              style={{marginTop: "50px"}}
              placeholder="0790022543"
              name="phoneNumber"
              margin="normal"
              value={this.state.phoneNumber}
              onChange={this.handleChange.bind(this)}
            />
            <Typography
              variant="caption"
              style={{"color": "#006789"}}
              gutterBottom
              align="justify"
            >
              {this.state.errorPhone}
            </Typography>
            <TextField
              fullWidth
              label="Password"
              type="password"
              autoComplete="current-password"
              required={true}
              name="password"
              value={this.state.password}
              onChange={this.handleChange.bind(this)}
              style={{marginBottom: "100px"}}
            />
            <Typography
              variant="caption"
              style={{"color": "#006789"}}
              gutterBottom
              align="justify"
            >
              {this.state.errorPassword}
            </Typography>

            <Button
              className="btnStyle1"
              variant="contained"
              type="submit"
              margin="normal"
              style={{backgroundColor: "#006789"}}
              fullWidth
            >
              Sign In
            </Button>
          </form>
          <Button
            style={{
              marginTop: "15px",
              size: "medium",
              textTransform: "lowercase"
            }}
            color="default"
            fullWidth
          >
            Create new account
          </Button>
        </Paper>
      </div>
    );
  }
}

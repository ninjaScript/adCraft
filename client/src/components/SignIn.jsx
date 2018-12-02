import React from "react";
import "../style/styles.css";
import {
  Paper,
  Button,
  TextField,
  FormControl,
  Typography
} from "@material-ui/core";

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
      <div className="container">
        <Paper className="style">
          <div>
            <Typography variant="display2" align="center" color="primary">
              Sign In
            </Typography>
          </div>
          <form onSubmit={this.handleOnClick.bind(this)}>
            <TextField
              fullWidth
              label="Phone Number"
              type="tel"
              required={true}
              placeholder="0790022543"
              name="phoneNumber"
              margin="normal"
              variant="outlined"
              value={this.state.phoneNumber}
              onChange={this.handleChange.bind(this)}
            />
            <Typography
              variant="caption"
              color="secondary"
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
              margin="normal"
              name="password"
              value={this.state.password}
              onChange={this.handleChange.bind(this)}
              variant="outlined"
            />
            <Typography
              variant="caption"
              color="secondary"
              gutterBottom
              align="justify"
            >
              {this.state.errorPassword}
            </Typography>

            <Button
              className="btnStyle"
              variant="contained"
              color="primary"
              type="submit"
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

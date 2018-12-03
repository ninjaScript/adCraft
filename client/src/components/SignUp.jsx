import React from "react";
import "../style/styles.css";
import $ from "jquery";
import {
  Paper,
  Button,
  FormLabel,
  TextField,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography
} from "@material-ui/core";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      password: "",
      gender: "male",
      errorPhone: "",
      errorPassword: "",
      validation: false
    };
  }
  // this function to deal eith the textField and get the data
  handleChange(e) {
    e.preventDefault();
    let target = e.target;
    this.setState({ [target.name]: target.value });
    console.log(this.state[target.name]);

    // validation to  phone number
    if (this.state.phoneNumber.length < 9) {
      this.setState({
        errorPhone: "The phone number should be in this format 0790011200",
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
  handleOnClick(e) {
    e.preventDefault();
    console.log(this.state);
    // if the validation true  send data
    if (this.state.validation) {
      $.ajax({
        url: 'http://127.0.0.1:5000/sign-up',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          phoneNumber: this.state.phoneNumber,
          password: this.state.password,
          gender: this.state.gender,
          id_roles: 1
        }),
        success: (data) => {
          console.log(data)
        },
        error: (err) => {
          console.log('err', err);
        }
      });
    }
  }
  render() {
    // const style = {
    //   padding: "15px",
    //   margin: "40px",
    //   maxWidth: "500px",
    //   display: "inline - block"
    // };
    // const btnStyle = { padding: "10px", marginTop: "10px", fontSize: "18px" };
    // const container = { display: "flex", justifyContent: "center" };
    return (
      <div className="container">
        <Paper className="style">
          <div>
            <Typography variant="display2" align="center" color="primary" >
              Sign Up
            </Typography>
          </div>
          <form>
            <TextField
              label="FirstName"
              required={true}
              name="firstName"
              margin="normal"
              variant="outlined"
              value={this.state.firstName}
              onChange={this.handleChange.bind(this)}
              fullWidth
            />
            <TextField
              label="LastName"
              type="text"
              name="lastName"
              required={true}
              margin="normal"
              variant="outlined"
              value={this.state.lastName}
              onChange={this.handleChange.bind(this)}
              fullWidth
            />

            <TextField
              label="Phone Number"
              type="number"
              required={true}
              placeholder="0790022543"
              name="phoneNumber"
              margin="normal"
              variant="outlined"
              value={this.state.phoneNumber}
              onChange={this.handleChange.bind(this)}
              fullWidth
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
              label="Password"
              type="password"
              autoComplete="current-password"
              required={true}
              margin="normal"
              name="password"
              value={this.state.password}
              onChange={this.handleChange.bind(this)}
              variant="outlined"
              fullWidth
            />
            <Typography
              variant="caption"
              color="secondary"
              gutterBottom
              align="justify"
            >
              {this.state.errorPassword}
            </Typography>
            <FormControl style={{ marginTop: "10px" }} component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="Gender"
                value={this.state.gender}
                onChange={this.handleChange.bind(this)}
                name="gender"
              >
                <FormControlLabel
                  value="male"
                  control={<Radio color="primary" />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio color="primary" />}
                  label="Female"
                />
              </RadioGroup>
            </FormControl>
            <Button
              onClick={this.handleOnClick.bind(this)}
              className="btnStyle"
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              Sign Up
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
            Already have an account
          </Button>
        </Paper>
      </div>
    );
  }
}

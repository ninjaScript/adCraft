import React from 'react';
import './style/App.css';
import {Button, Grid, Paper } from "@material-ui/core";
import DaHeader from './components/DaHeader.jsx';
import Sidebar from './components/Sidebar.js';
import SearchBar from './components/SearchBar';
export default class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.location.state.user
    };
  }

  render() {

   const paper=  {
      padding: "5px",
      margin: "10px",
      textAlign: "center",
    }
    return (
      <div>
        <Sidebar />
        <DaHeader />
        <Grid container style={{ display: "flex", justifyContent: "center" }} >
          <Grid item md={10}>
            <Paper style={paper}>
              <div>
                <h1>Search in adCraft community</h1>
              </div>
              <div style={{marginLeft:"25%" , marginTop:"80px"}}>
                <SearchBar/>
              </div>
              
            </Paper>
          </Grid>
        </Grid>
      </div >
    )
  }
}
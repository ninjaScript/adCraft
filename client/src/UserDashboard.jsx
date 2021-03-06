import React from 'react';
import './style/App.css';
import { Grid, Paper } from "@material-ui/core";
import $ from 'jquery';
import DaHeader from './components/DaHeader.jsx';
import Sidebar from './components/Sidebar.js';
import SearchBar from './components/SearchBar';
import AdvertiserGridList from './components/AdvertiserGridList.jsx'
import { browserHistory } from 'react-router';

export default class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.location.state.user,
      advertisers: [],
      categories: [],
      notFound: ""
    };
  }

  componentDidMount() {
    // retrive data from server change data in the stata with new data  
    // when start this component
    $.ajax({
      url: '/advertisers',
      type: 'GET',
      contentType: 'application/json',
      success: (data) => {
        console.log(data);
        this.setState({ advertisers: data })
      },
      error: (err) => {
        console.log(err);
      }
    });

    $.ajax({
      url: '/categories',
      type: 'GET',
      contentType: 'application/json',
      success: (res) => {
        console.log(res);
        this.setState({ categories: res.data })
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  // this function to logout 
  logout() {
    $.ajax({
      url: '/logout',
      type: 'GET',
      contentType: 'application/json',
      success: (data) => {
        console.log(data);
        browserHistory.push('/')
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  search(term) {
    // retrive data from server change data in the stata with new data  
    // depend on the search
    console.log(term);
    $.ajax({
      url: '/search',
      type: 'POST',
      data: JSON.stringify({ target: term }),
      contentType: 'application/json',
      success: (res) => {
        console.log(res);
        if (res.data.length > 0) {
          this.setState({ advertisers: res.data, notFound: "" });
        } else {
          this.setState({ advertisers: [], notFound: "No data Found for this category" });

        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  handleonClickSideList(id) {
    console.log(id);
    $.ajax({
      url: '/adv-category',
      type: 'POST',
      data: JSON.stringify({ id_cat: id }),
      contentType: 'application/json',
      success: (res) => {
        console.log(res);
        if (res.data.length > 0) {
          this.setState({ advertisers: res.data, notFound: "" });
        } else {
          this.setState({ advertisers: [], notFound: "No data Found for this category" });

        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  // this function to visit  advertiser profile
  visitProfile(advertiesr) {
    console.log(advertiesr);
    console.log(this.state.user);

    browserHistory.push({
      pathname: "/adv-profile/" + advertiesr.id,
      state: {
        // object contain adv data
        advertiesr: advertiesr,
        // obj contain user data
        user: this.state.user
      }
    })
  }

  render() {
    const paper = {
      margin: "10px",
      paddingTop: 20,
      textAlign: "center",
      height: "100%"
    }
    return (
      <Grid>
        <DaHeader user={this.state.user} logout={this.logout.bind(this)} />
        <Sidebar handleonClickSideList={this.handleonClickSideList.bind(this)} data={this.state.categories} />

          <div>
            <Paper style={paper}>
              <div>
                <h1>Search in adCraft community</h1>
              </div >
               <center><div style={{ marginTop: "80px" }}>
                <SearchBar search={this.search.bind(this)} />
              </div>
              </center>
              <div>
                <h2>{this.state.notFound}</h2>
                <AdvertiserGridList
                  data={this.state.advertisers}
                  visitProfile={this.visitProfile.bind(this)}
                />
              </div>
            </Paper>
          </div>
      </Grid >
    )
  }
}
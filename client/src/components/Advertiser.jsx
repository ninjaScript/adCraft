import React from 'react';
import AdvertiserProfile from './AdvertiserProfile.jsx';
import AdvertiserItemsGrid from './AdvertiserItemsGrid.jsx';
import $ from 'jquery';
const axios = require("axios");

export default class Advertiser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    console.log(this.props.location.state.advertiesr);
    // retrive items from server change data in the stata with new data  
    // when start this component
    $.ajax({
      url: '/adv-items',
      type: 'POST',
      data : JSON.stringify({adv_id: this.props.location.state.advertiesr.id }),
      contentType: 'application/json',
      success: (res) => {
        console.log(res);
        this.setState({ items: res.data })
      },
      error: (err) => {
        console.log(err);
      }
    });
  }  

  // this function to add items to database it pass tp advertiserProfile
  addItems(formData) {
    console.log("Helllllll")
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    // !!!
    axios.post("/add-item", formData, config)
      .then((res) => {
        console.log(res)
        if(res.data.data.length > 0) {
          this.setState({items: res.data.data})
        }
        alert("The file is successfully uploaded");
       
      }).catch((error) => {
    });
  }

  render() {
    return (
      <div>
        <div >
          <AdvertiserProfile
            advertiesr={this.props.location.state.advertiesr}
            user={this.props.location.state.user}
            addItems = {this.addItems.bind(this)}
          />
        </div>
        <div>
          <AdvertiserItemsGrid
            items={this.state.items}
            userID={this.props.location.state.user.id_roles}
          />
        </div>
      </div>
    );
  }
}
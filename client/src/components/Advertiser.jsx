import React from 'react';
import AdvertiserProfile from './AdvertiserProfile.jsx';
import AdvertiserItemsGrid from './AdvertiserItemsGrid.jsx';
import $ from 'jquery';
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

  render() {
    return (
      <div>
        <div >
          <AdvertiserProfile
            advertiesr={this.props.location.state.advertiesr}
            user={this.props.location.state.user}
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
import React from 'react';
import PropTypes from 'prop-types';
import AdvertiserProfile from './advertiser_profile.jsx';
import AdvertiserItemsGrid from './advertiser_items_grid.jsx';

export default class Advertiser extends React.Component {
  render() {
    return (
      <div>
      <AdvertiserProfile/>
      <AdvertiserItemsGrid/>
      </div>
    );
  }
}
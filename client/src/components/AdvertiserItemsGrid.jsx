import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

import AdvertiserItems from './AdvertiserItems.jsx';

const style = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginLeft: 25
  },
  gridList: {
    width: '70%',
    height: '100%',
  },
};

export default class AdvertiserItemsGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style = {style.root} >
        <GridList cols={3}  style={style.gridList}>
          <AdvertiserItems 
            userID = {this.props.userID}
          />
          <AdvertiserItems/>
          <AdvertiserItems/>
          <AdvertiserItems/>
          <AdvertiserItems/>
          <AdvertiserItems/>
        </GridList>
      </div >
    )
  }
}


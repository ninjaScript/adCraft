import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Button from '@material-ui/core/Button';
import AdvertiserItems from './advertiser_items.jsx';

const style = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
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
      < div style = {style.root} >
        <GridList cols={3}  style={style.gridList}>
          <AdvertiserItems/>
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


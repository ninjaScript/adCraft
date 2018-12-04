import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import AdvertiserStore from './advertiser_store.jsx';

const style = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '70%',
    height: '100%',
  },
});

export default class AdvertiserGridList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      < div style = {style.root} >
        <GridList cols={3}  style={style.gridList}>
          <AdvertiserStore/>
          <AdvertiserStore/>
          <AdvertiserStore/>
          <AdvertiserStore/>
          <AdvertiserStore/>
          <AdvertiserStore/>
          <AdvertiserStore/>
        </GridList>
      </div >
    )
  }
}


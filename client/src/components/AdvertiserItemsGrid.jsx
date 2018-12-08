import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

import AdvertiserItems from './AdvertiserItems.jsx';
import { Paper } from '@material-ui/core';

const style = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    padding: 20,
    marginLeft : 20,
    marginRight: 20
  
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
};

export default class AdvertiserItemsGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props.items)
  }

  render() {
    return (
      <Paper style = {style.root} >
        <GridList cols={4}  style={style.gridList}>
          {
            this.props.items.map((item) =>(
              <AdvertiserItems key = {item}
                item = {item}
                userID = {this.props.userID}
                deleteItem = {this.props.deleteItem.bind(this)}
              />
            ))
          }
        </GridList>
      </Paper>
    )
  }
}


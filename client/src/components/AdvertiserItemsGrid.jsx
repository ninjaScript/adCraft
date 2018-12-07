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
    console.log(this.props.items)
  }

  render() {
    return (
      <div style = {style.root} >
        <GridList cols={4}  style={style.gridList}>
          {
            this.props.items.map((item) =>(
              <AdvertiserItems key = {item}
                item = {item}
                userID = {this.props.userID}
              />
            ))
          }
        </GridList>
      </div>
    )
  }
}


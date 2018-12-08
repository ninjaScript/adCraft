import React from 'react';
import GridList from '@material-ui/core/GridList';
import AdvertiserStore from './AdvertiserStore.jsx';
import {browserHistory } from 'react-router';

const style ={
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

export default class AdvertiserGridList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      < div style = {style.root} >
        <GridList cols={3}  style={style.gridList}>
          { this.props.data.map((advertiesr) =>
            <AdvertiserStore 
              key ={advertiesr} 
              data ={advertiesr}
              visitProfile = {this.props.visitProfile.bind(this)}  
            />
          )}
        </GridList>
      </div >
    )
  }
}


import React from 'react';
import GridList from '@material-ui/core/GridList';
import AdvertiserStore from './AdvertiserStore.jsx';

const style ={
  root: {
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  gridList: {
    width: '70%',
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
            <AdvertiserStore key ={advertiesr} data ={advertiesr}/>
          )}
          {/* <AdvertiserStore/>
          <AdvertiserStore/>
          <AdvertiserStore/>
          <AdvertiserStore/>
          <AdvertiserStore/>
          <AdvertiserStore/>
          <AdvertiserStore/> */}
        </GridList>
      </div >
    )
  }
}


import React, { Component } from 'react';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import sampleProductList from '../sampleProductList';
import {IconButton, GridListTileBar } from "@material-ui/core";
import StarBorderIcon from '@material-ui/icons/StarBorder';


class ItemList extends Component {
  render () {
    return (
       <div className="root">
         <GridList cellHeight={400} className="gridList" cols={3}>
           {sampleProductList.map(tile => (
             <GridListTile className="item" key={tile.img} cols={tile.cols || 1}>
                <img src={tile.img} alt=""/>
                  <GridListTileBar
                    title={tile.title}
                    subtitle={<span>by: {tile.Advertiser}</span>}
                    text={tile.desc}
                    actionIcon={
                 <IconButton className="icon">
                    <StarBorderIcon />
                 </IconButton>
                   }
                />
                </GridListTile>
             ))}
         </GridList>
      </div>
    );
  }
}

export default ItemList;

import React, { Component } from 'react';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import sampleProductList from '../sampleProductList';
import {IconButton, GridListTileBar, Typography, CardContent, Grid } from "@material-ui/core";
import StarBorderIcon from '@material-ui/icons/StarBorder';


class ItemList extends Component {
  render () {
    return (
       <div className="root">
         <GridList cellHeight={500} className="gridList" cols={3}>
           {sampleProductList.map(tile => (
             <GridListTile className="item" key={tile.img} cols={tile.cols || 1}>
                <img src={tile.img} alt=""/>
                  <GridListTileBar 
                    className="overlay"
                    style={{"minHeight": "100px"}}
                    title={tile.title}
                    subtitle={<div><span>{tile.Advertiser}, <p>{tile.desc}</p><text>{tile.price}</text></span></div>}
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

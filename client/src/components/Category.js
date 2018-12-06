import React, { Component } from 'react';
import '../style/App.css';
import craft from '../style/craft.jpeg';
import food from '../style/food.jpg';
import cloth from '../style/clothes.jpeg';
import { Grid, Paper } from "@material-ui/core";



class Category extends Component {
  render() {
    return (
      <Grid className="adCategory" container spacing={24}>
        <Grid className="category1" item xs>
          <img src={food} height="300" width="400" alt="" />
          <Grid className="contento">
            <Paper action="any" class="flex-item1">
              <button id="myBtn1">FOOD</button>
            </Paper>
          </Grid>
        </Grid>
        <Grid className="category2" item xs>
          <img src={cloth} height="300" width="400" alt="" />
          <Grid className="contento">
            <Paper action="any" class="flex-item1">
              <button id="myBtn1">FASHION</button>
            </Paper>
          </Grid>
        </Grid>
        <Grid className="category3" item xs>
          <img src={craft} height="300" width="400" alt="" />
          <Grid className="contento">
            <Paper action="any" class="flex-item1">
              <button id="myBtn1">CRAFT</button>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Category;

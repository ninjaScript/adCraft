import React, { Component } from 'react';
import '../style/App.css';
import craft from '../style/craft.jpg';
import food from '../style/good.jpeg';
import cloth from '../style/clothes.jpeg';
import { Grid, Paper } from "@material-ui/core";
import AboutUs from './AboutUs.js';


class Category extends Component {

  constructor () {
    super()
    this.state = {
      isHiddenAboutUs: false,
      isHiddenProduct: false,
      isHiddenExplore: false
    }
  }
  toggleHiddenAboutUs () {
    this.setState({
      isHiddenAboutUs: !this.state.isHiddenAboutUs,
      isHiddenProduct: false,
      isHiddenExplore: false
    })
  }

  toggleHiddenProduct () {
    this.setState({
      isHiddenProduct: !this.state.isHiddenProduct,
      isHiddenAboutUs: false,
      isHiddenExplore: false
    })
  }

  toggleHiddenExplore () {
    this.setState({
      isHiddenExplore: !this.state.isHiddenExplore,
      isHiddenProduct: false,
      isHiddenAboutUs: false,
      
    })
  }


  render() {
    return (
      <Grid className="adCategory" container spacing={0}>
        <Grid className="category1" item xs toggleHiddenAboutUs={this.toggleHiddenAboutUs} toggleHiddenProduct={this.toggleHiddenProduct} toggleHiddenExplore={this.toggleHiddenExplore}>
          <img src={food} height="500" width="1400" alt="" />
           <Grid className="contento">
            <Paper action="any" class="flex-item1">
              {/* //<button id="myBtn1"  onClick={this.toggleHiddenAboutUs.bind(this)}>Who We Are</button> */}
            </Paper>
          </Grid>
        </Grid>
      <Grid className="us">{!this.state.isHiddenAboutUs && <AboutUs />}</Grid>
        <Grid className="category2" item xs>
         <img src={cloth} height="500" width="1400" alt="" />
          <Grid className="contento">
            <Paper action="any" class="flex-item1">
              {/* <button id="myBtn1" onClick={this.toggleHiddenProduct.bind(this)}>Our Services</button> */}
            </Paper>
          </Grid>
        </Grid>
      <Grid className="us">{!this.state.isHiddenProduct && <AboutUs />}</Grid>
        <Grid className="category3" item xs>
          <img src={craft} height="500" width="1400" alt="" />
          <Grid className="contento">
            <Paper action="any" class="flex-item1">
              {/* <button id="myBtn1" onClick={this.toggleHiddenExplore.bind(this)}>Explore</button> */}
            </Paper>
          </Grid>
        </Grid>    
      <Grid className="us">{!this.state.isHiddenExplore && <AboutUs />}</Grid>
       <Grid>
         </Grid>
      </Grid>
    );
  }
}


export default Category;


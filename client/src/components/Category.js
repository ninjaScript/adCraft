// { /******************************************* import files to be used in rendering including Material UI Usage *********************************/}
// it is very important to import files since the component needed such data in order of it to use the needed one
import React, { Component } from 'react';
import '../style/App.css';
import craft from '../style/craft.jpg';
import food from '../style/good.jpeg';
import cloth from '../style/clothes.jpg';
import { Grid, Paper } from "@material-ui/core";
import AboutUs from './AboutUs.js';
import OurServices from './OurServices.js';
import WhyUs from './WhyUs.js';


{ /*************************************** Category Component for our 1st page component included are AboutUs WhyUs and OurProduct *********************************/}
class Category extends Component {

  // stateless function needed for some minor functionality such as onclick and base on function to not intercept conflict between clicks
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

  // Material UI usage dynamically in order to present components
  //usage of hidden div applied here as programmed above in a stateless function
  render() {
    return (
      <Grid className="adCategory" container spacing={20}>
        <Grid className="category1" item xs toggleHiddenAboutUs={this.toggleHiddenAboutUs} toggleHiddenProduct={this.toggleHiddenProduct} toggleHiddenExplore={this.toggleHiddenExplore}>
          <img   style={{backgroundColor:"#006789"}} height="100" width="1400" alt="" />
           <Grid className="contento">
            <Paper action="any" class="flex-item1">
              <button id="myBtn1">Who We Are</button>
            </Paper>
          </Grid>
        </Grid>
      <Grid className="us">{!this.state.isHiddenAboutUs && <AboutUs />}</Grid>
        <Grid className="category2" item xs>
         <img  style={{backgroundColor:"#343434"}} height="100" width="1400" alt="" />
          <Grid className="contento">
            <Paper action="any" class="flex-item1">
              <button id="myBtn1" onClick={this.toggleHiddenProduct.bind(this)}>Our Services</button>
            </Paper>
          </Grid>
        </Grid>
      <Grid className="us">{this.state.isHiddenProduct && <OurServices />}</Grid>
        <Grid className="category3" item xs>
          <img style={{backgroundColor:"#ffaa3b"}} height="100" width="1400" alt="" />
          <Grid className="contento">
            <Paper action="any" class="flex-item1">
              <button id="myBtn1" onClick={this.toggleHiddenExplore.bind(this)}>Why Choose Us?</button>
            </Paper>
          </Grid>
        </Grid>    
      <Grid className="us">{this.state.isHiddenExplore && <WhyUs />}</Grid>
       <Grid>
         </Grid>
      </Grid>
    );
  }
}


export default Category;


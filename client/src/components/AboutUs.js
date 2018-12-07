import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/App.css';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import GridListTileBar from '@material-ui/core/GridListTileBar'
import logo from '../style/logo.jpg';
import radwan from '../style/radwan.jpg';
import mohammad from '../style/mohammad.jpg';
import qusay from '../style/qusay.jpg';
import ezraa from '../style/ezraa.jpg';

class AboutUs extends Component {
    constructor () {
        super()
        this.state = {
          toggleButton: false
        }
      }

      toggleButtonDesc () {
        this.setState({
            toggleButton: !this.state.toggleButton
        })
      }
  
    render() {
        return (
            <Card className="card" >
               <CardActionArea> 
                  <CardMedia
                    className="media"
                    image={logo}
                    title="adcraft"
                   />
                <CardContent>
                <Typography align="center">
                                                                <h1>-OUR MISSION-</h1>
                            <p>To Promote Entrepreneurship Business and Our Advertising App as the most efficient in Marketing.</p>
                  </Typography>
                  <Typography>
                    <h2>adCraft Advertising</h2>
                  </Typography>
                  <Typography component="p" className="arrange">

                  <p>Welcome to adCraft Advertising, your number one source for all Home to Commercial Business Advertisement.
                  We're dedicated to giving you the very best of Advertising Services, with a focus on dependability, customer service and uniqueness.
                  Founded this year, 2018 by four talented personnel, Mohammad Rawashdeh, Radwan Abdoh, Esraa Zaitoun, and Qusay Al-Bawareed.</p>
                  
                  <p> Adcraft Advertising has come a long way from its beginnings in a small idea of great minds from RBK's Students in wonders of Jordan. When the four pioneer first started out,
                  there passion for helping other entrepreneur be more eco-friendly, providing the best advertising tools for his fellow businessman and women
                  drove him to do intense research, having sleepless nights, and gaving them the impetus to turn hard work and inspiration into to a booming 
                  online store. We now serve customers all over Jordan, the world, the Amman area, and are thrilled to be a part of the quirky, 
                  eco-friendly, fair business advertising trade wing of the advertising industry such as fashion, baked goods, crafts and more.</p>

                  <p>We hope you enjoy our Advertisement Services as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>



                  <p>Sincerely,</p>
                  <b><p>The NinjaScript</p></b>
                  <p>05th Cohort</p>


                 <Grid className="ninjaScript" container direction={'row'}>
                    <Grid className="media" item xs toggleButtonDesc={this.toggleButtonDesc}>
                    <img src={mohammad} height="100" width="100" alt="" style={{"borderRadius":"50px"}} 
                    onClick={this.toggleButtonDesc.bind(this)}
                    /></Grid>
                    
                {/* <Grid className="us">{!this.state.isHiddenAboutUs && <AboutUs />}</Grid> */}

                
                    <Grid className="media" item xs toggleButtonDesc={this.toggleButtonDesc}>
                    <img src={radwan} height="100" width="100" alt="" style={{"borderRadius":"50px"}} 
                    onClick={this.toggleButtonDesc.bind(this)}
                    /></Grid>

                
                    <Grid className="media" item xs toggleButtonDesc={this.toggleButtonDesc}>
                    <img src={qusay} height="100" width="100" alt="" style={{"borderRadius":"50px"}} 
                    onClick={this.toggleButtonDesc.bind(this)}
                    /></Grid>

                
                    <Grid className="media" item xs toggleButtonDesc={this.toggleButtonDesc}>
                    <img src={ezraa} height="100" width="100" alt="" style={{"borderRadius":"50px"}} 
                    onClick={this.toggleButtonDesc.bind(this)}
                    /></Grid>


                  {/* <CardMedia item xs
                    className="media" style={{"borderRadius":"50px"}}
                    image={radwan}
                  />
                  
                  <CardMedia item xs
                    className="media" style={{"borderRadius":"50px"}}
                    image={qusay}
                  />
                  <CardMedia item xs
                    className="media" style={{"borderRadius":"50px"}}
                    image={ezraa}
                  /> */}
                  </Grid>
                  </Typography>
                </CardContent>
              </CardActionArea>
              
            </Card>
          );
        }
    }
        AboutUs.propTypes = {
          classes: PropTypes.object.isRequired,
        };
        
  

  export default AboutUs;





  

// { /*************************************** About Us Section import files  *********************************/}
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
import logo from '../style/signup.png';
import border from '../style/border.png';
import radwan from '../style/radwan.jpg';
import mohammad from '../style/mohammad.jpg';
import qusay from '../style/qusay.jpg';
import ezraa from '../style/ezraa.jpg';

{ /*************************************** About Us rendering Section with imported file usage *********************************/}
//stateless function included where hiden Grids usage onclick and conflict resolved
//static page for information about our group's mission for this project
class AboutUs extends Component {
    constructor () {
        super()
        this.state = {
          toggleButton: false,
          toggleButton1: false,
          toggleButton2: false,
          toggleButton3: false
        }
      }

      toggleButtonDesc () {
        this.setState({
            toggleButton: !this.state.toggleButton,
            toggleButton1: false,
            toggleButton2: false,
            toggleButton3: false
        })
      }
      toggleButtonDesc1 () {
        this.setState({
            toggleButton1: !this.state.toggleButton1,
            toggleButton: false,
            toggleButton2: false,
            toggleButton3: false
        })
      }
      toggleButtonDesc2 () {
        this.setState({
            toggleButton2: !this.state.toggleButton2,
            toggleButton1: false,
            toggleButton: false,
            toggleButton3: false
        })
      }
      toggleButtonDesc3 () {
        this.setState({
            toggleButton3: !this.state.toggleButton3,
            toggleButton1: false,
            toggleButton2: false,
            toggleButton: false
        })
      }
  
    render() {
        return (
            <Card className="card" spacing={24}>
               <CardActionArea> 
                   <CardMedia
                    className="media1"
                    image={logo}
                    alignItem="center"
                   />
                   <CardContent>
                   <Typography align="center">
                                                                  <h1 id="mission">Our Mission</h1>
                              <p>To Promote Entrepreneurship Business and Our Advertising App as the most efficient in Marketing.</p>
                    <CardMedia
                    className="mediaMission"
                    image={border}
                    />
                    </Typography>
                    <Typography>
                      <h1 id="mission1">adCraft Advertising</h1>
                    </Typography>
                    <Typography component="p" className="arrange">

                    <p>Welcome to adCraft Advertising, your number one source for all Home to Commercial Business Advertisement.
                    We're dedicated to giving you the very best of Advertising Services, with a focus on dependability, customer service and uniqueness.
                    Founded this year, 2018 by four talented personnel, Mohammad Rawashdeh, Radwan Abdoh, Esraa Zaitoun, and Qusay Al-Bawareed.</p>
                    
                    <p id="arrange2"> Adcraft Advertising has come a long way from its beginnings in a small idea of great minds from RBK's Students in wonders of Jordan. When the four pioneer first started out,
                    there passion for helping other entrepreneur be more eco-friendly, providing the best advertising tools for his fellow businessman and women
                    drove him to do intense research, having sleepless nights, and gaving them the impetus to turn hard work and inspiration into to a booming 
                    online store. We now serve customers all over Jordan, the world, the Amman area, and are thrilled to be a part of the quirky, 
                    eco-friendly, fair business advertising trade wing of the advertising industry such as fashion, baked goods, crafts and more.</p>

                    <p id="arrange3">We hope you enjoy our Advertisement Services as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>



                    <p id="closing">Sincerely,</p>
                    <p id="signature">ninjaScript</p>
                    <b><p>The NinjaScript</p></b>
                    <p>05th Cohort</p>


                      <Grid className="ninjaScript" container direction={'row'}>
                        <Grid item xs={2} toggleButtonDesc={this.toggleButtonDesc}>
                        <img src={mohammad} className="media" height="100" width="100" alt="" style={{"borderRadius":"50px"}} 
                        onClick={this.toggleButtonDesc.bind(this)}
                        />{this.state.toggleButton && <Typography align="center" style={{marginLeft: "-100px"}}  className="label"><b>Mohammad Rawashdeh</b><p>Project Manager</p></Typography>}</Grid>
                        
                        <Grid  item xs={2} toggleButtonDesc3={this.toggleButtonDesc3}>
                        <img src={ezraa} className="media" height="100" width="100" alt="" style={{"borderRadius":"50px"}} 
                        onClick={this.toggleButtonDesc3.bind(this)}
                        />{this.state.toggleButton3 &&<Typography  align="center" style={{marginLeft: "-100px"}}  className="label"><b>Ezraa Zaitoun</b><p>Server Specialist</p></Typography>}</Grid>

                        <Grid  item xs={2} toggleButtonDesc1={this.toggleButtonDesc1}>
                        <img src={radwan} className="media" height="100" width="100" alt="" style={{"borderRadius":"50px"}} 
                        onClick={this.toggleButtonDesc1.bind(this)}
                        />{this.state.toggleButton1 && <Typography className="label" align="center" style={{marginLeft: "-100px"}} ><b>Radwan Abdoh</b><p>FrontEnd Developer</p></Typography>}</Grid>

                    
                        <Grid  item xs={2} toggleButtonDesc2={this.toggleButtonDesc2}>
                        <img src={qusay} className="media" height="100" width="100" alt="" style={{"borderRadius":"50px"}} 
                        onClick={this.toggleButtonDesc2.bind(this)}
                        />{this.state.toggleButton2 &&<Typography align="center" style={{marginLeft: "-100px"}}  className="label"><b>Qusay Al-Bawareed</b><p>Database Designer</p></Typography>}</Grid>
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





  

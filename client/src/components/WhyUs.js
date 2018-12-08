// { /*************************************** Why Us imported file Section ************************************************/}
// line 4 is impor
import React, { Component } from 'react';
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
import blank from '../style/blank.png';
import organize1 from '../style/organize1.png';
import Implementation from '../style/implementation.png';
import money from '../style/money.png';
import service from '../style/service.png';
import reliability from '../style/reliability.png';
import userExp from '../style/userExp.png';


{ /*************************************** Why Us Section *****************************************/}
// Static rendered page for website information such as our performance, Easy Implementation, page monitization, realability and such
class WhyUs extends Component {
    render() {
        return (
          <Card className="card2" style={{width: "2000px"}}>
            <CardActionArea> 
                <Grid className="questionContainer" style={{marginTop: "150px"}}>
                    <CardMedia
                    className="media2"
                    image={logo}
                    />
                    </Grid>
                        <CardContent>
                            <Typography align="center">
                                                                                        <h1 id="mission">We Offer Exellence</h1>
                                                                <h1 style={{color: "#006789"}} id="mission">Performance, Easy Implementation & Reliability</h1>
                            
                            </Typography>
                                <Typography component="p" className="arrange" align="center">
                                    <Grid className="mainOrg">
                                        <Grid className="org1">
                                            <Grid className="p5">
                                            <h2 id="mission3">Performance</h2>
                                            <p>Earn more revenue through competitive advertising, relevant ads, and consistent coverage for all ad placements.</p>
                                                <img className="organize1" src={organize1}/>
                                            </Grid>
                                            <Grid className="p5">
                                            <h2 id="mission3">Easy Implementation</h2>
                                            <p>With the help of our Team for each product, set up is simple. A quick approval process means publishers can start earning within 24 hours.</p>
                                                <img className="organize1" src={Implementation}/>
                                            </Grid>
                                            <Grid className="p5">
                                            <h2 id="mission3">On and Off Page Monitization</h2>
                                            <p>Our diversified service helps our advertisers monetize when users are on the page as well as after they leave their site.</p>
                                            <img className="organize1" src={money}/>
                                            </Grid>
                                        </Grid>
                                        <Grid className="org2">
                                            <Grid className="p6">
                                            <h2 id="mission3">Service</h2>
                                            <p>With dedicated ninjaScript Team, advertisers get the highest level of service to ensure their account are properly optimized to receive the highest quality.</p>
                                                <img className="organize3" src={service}/>
                                            </Grid>
                                            <Grid className="p6">
                                            <h2 id="mission3">Reliability</h2>
                                            <p>As an established industry leader, publishers can rely on payouts on time. We work with 3rd parties to monitor the ads on our network. 
                                                You can rely on us to make sure your users are having the best possible experience.</p>
                                                <img className="organize4" src={reliability}/>
                                            </Grid>
                                            <Grid className="p6">
                                            <h2 id="mission3">Positive User Experience</h2>
                                            <p>Our minimally invasive ad displays allow for a positive user experience so that they maintain a great relationship with our publisher sites.</p>
                                            <img className="organize2" src={userExp}/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Typography>
                        </CardContent>
                    <Grid class="tech-slideshow1">
                        <Grid class="mover-3"></Grid>
                        <Grid class="mover-4"></Grid>
                 </Grid>
            </CardActionArea>
       </Card>
          );
        }
    }
  

  export default WhyUs;

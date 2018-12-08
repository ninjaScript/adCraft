// importing files is the most important thing since it renders the page when you export it from another component
// all of the important file that need to be used here are from data files as well as dependencies and as you can see we are using material ui
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
import blank from '../style/blank.png';
import organize from '../style/organize.png';
import upload from '../style/upload.png';
import publish from '../style/publish.png';
import utilize from '../style/utilize.png';

{ /******************************************* Component for Our Product and Service Section ******************************************/}

// for our page in the product and services section where you can see the flow of our application
//this contains only render since there is no function involve in a static environment
class OurServices extends Component {
  
    // as you can comprehend material ui hs been set 
    render() {
        return (
          <Card className="card1" >
          <CardActionArea> 
           <CardContent>
           <Typography align="center">
                                                        <h1 id="mission">Our Product and Services</h1>
                                                              <p><i>Your Business at Home</i></p>
            <Grid className="questionContainer" style={{marginTop: "50px"}}>
            <h1 id="w" align="left" style={{marginLeft: "620px"}}>What is</h1>
            <CardMedia
            className="media2"
            image={logo}
            />
            <h1 id="q"  align="center" style={{marginTop:"-60px"}}>?</h1>
            </Grid>
             </Typography>
             <Typography>
               <h1 id="mission1" style={{marginTop: "60px"}}>Structure</h1>
             </Typography>
             <Typography component="p" className="arrange" align="center">

             <p>adCraft is an App for promoting entrepreneur at home to the Community. Our product and Services will introduce local hand made product so it will recognize its boundery in terms of
               labor and creativity which wil lead for the people to promote also diverse culture and craftsmanship </p>
             
             <p id="arrange2">AdCraft also promotes entrepreneurship hosting for marketing and also convenience to our customer since we are providing information based product for them to effeciently get 
               what they usually want</p>


              <Grid>
              <Grid className="p1">
              <h2 id="mission2">1 Organize</h2>
              <p>Our app help you to organize your business need base on marketing data directly from your home via web-based questionnaires. 
              Our features are optimized to give you and your future customer a great experience, 
              while providing you with a high response rate.</p>
              <img className="organize" src={organize}/>
              </Grid>
              <Grid className="p2">
              <h2 id="mission2">2 Upload and Validate</h2>
              <p>adCraft confirms the identities of our Advertisers and Users, while protecting their privacy.
              Our anonymity guarantee allows people who would not normally be able to participate in customer referencing activities to speak freely.</p>
              <img className="upload" src={upload}/>
              </Grid>
              <Grid className="p3">
              <h2 id="mission2">3 Publish</h2>
              <p>Instantly publish your Advertisement you select as content assets verified by adCraft. Our Advertisers routinely publish 
              hundreds of content assets in their first 30 days – there's no limit. The adCraft Content Library serves as a public repository 
              of your published customer proof so they can access your items and entrepreneurial activities. Since adCraft is a 3rd party, you can cite 
              the content in press releases just like you would any 3rd-party advertising Business.</p>
              <img className="publish" src={publish}/>
              </Grid>
              <Grid className="p4">
              <h2 id="mission2">4 Utilize</h2>
              <p>adCraft content is useful across all stages of the Advertiser's journey, from Organizing to final decision-making and Uploading, and we provide the tools to 
              leverage your content in each of these funnel stages.

              In addition, our Connectors integrate with leading Advertising Businessess, Marketing Automation, 
              and collaboration platforms so that your adCraft experience is leveraged across the enterprise.</p>
              <img className="utilize" src={utilize}/>
              </Grid>
              </Grid>
               <Grid>
               <img  src={blank} className="downloadAd" height="200" width="400" alt="" style={{marginLeft: "-500px"}} />
               <Grid className="addButton">
               <button className="google" href="https://play.google.com/store?hl=en"></button>
               <button className="apple" href="https://www.apple.com/lae/ios/app-store"></button>
               <Grid>
               <h3>The best Advertising App in the World available on mobile</h3>
                <h5 style={{marginTop: "-10px"}}>Download our app and get the adCraft experience anywhere, anytime</h5>
               </Grid>
               </Grid>
               </Grid>
             </Typography>
           </CardContent>
           { /******************************************* Slide Show effext has been used for visual Integration in connection with CSS*********************************/}
           <Grid class="tech-slideshow">
            <Grid class="mover-1"></Grid>
            <Grid class="mover-2"></Grid>
          </Grid>
         </CardActionArea>
       </Card>
          );
        }
    }
  

  export default OurServices;

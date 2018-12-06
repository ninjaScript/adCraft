import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const style = {
  card: {
    maxWidth: 325,
    margin : 10,
    textAlign :"left"
    },
  media: {
    height: 140,
  },
  follower: {
    marginLeft: 10,
  },
  button: {
    marginLeft: 100,
  },
};

export default class AdvertiserStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  visitProfile () {
    this.props.visitProfile(this.props.data)
  }
  render() {

    return (
      <Card style={style.card}>
        <CardActionArea
          onClick = {this.visitProfile.bind(this)}
        >
          <CardMedia style={style.media}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYXGTHOjkFSw-cjPYwlXvyAwpVJFO0RPc_fxFDVPKsQxicPzKDrA"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" color="primary">
             {this.props.data.firstName + " " + this.props.data.lastName}
            </Typography>
            <Typography variant="body2" component="p">
              I make food at home, I can make all kinde of food and sweets.
            </Typography>
            <Typography variant="h6" component="h3" color="primary">
              {"Rating:  "+ this.props.data.rateAvg}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Typography style={style.follower} size="small" color="primary">
            {"Followers: " + this.props.data.numFeedback}               
          </Typography>
          <Button variant= "outlined" style={style.button} size="small" color="primary">
            Follow +
          </Button>
        </CardActions>
      </Card>
    );
  }
}
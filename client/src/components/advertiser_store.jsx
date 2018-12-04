import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const style = {
  card: {
    maxWidth: 300,
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

  render() {

    return (
      <Card style={style.card}>
        <CardActionArea>
          <CardMedia style={style.media}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYXGTHOjkFSw-cjPYwlXvyAwpVJFO0RPc_fxFDVPKsQxicPzKDrA"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" color="primary">
              Mohammed Rawashdeh
            </Typography>
            <Typography component="p">
              I make food at home, I can make all kinde of food and sweets.
              We are able to make large amount of food, for partys, wedding, and birthday's.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Typography style={style.follower} size="small" color="black">
            Followers               
          </Typography>
          <Button style={style.button} size="small" color="primary">
            Follow +
          </Button>
        </CardActions>
      </Card>
    );
  }
}
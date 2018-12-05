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
    margin: 10,
    },
  media: {
    height: 140,
  },
  Delet: {
    color: "white",
    backgroundColor:"#cc0000",
  },
  button: {
    marginLeft: 80,
    color: "white",
    backgroundColor: "#006789",
  },
};

export default class AdvertiserItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <Card style={style.card}>
        <CardActionArea>
          <CardMedia style={style.media}
            image="https://cdn-image.foodandwine.com/sites/default/files/1509031600/arugua-and-squash-salad-XL-RECIPE1217.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2" style={{"color": "#006789"}}>
              Salad
            </Typography>
            <Typography componen="p">
              This dish is very delicious, you should try it.
            </Typography>
            <Typography componen="p">
             The price is: 10JD .
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" style={style.Delet}>
            Delet Item
          </Button>
          <Button size="small" style={style.button}>
            Edite Item
          </Button>
        </CardActions>
      </Card>
    );
  }
}
// style={{"backgroundColor":"#008ae6"}}
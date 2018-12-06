import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    color:"#006789",
  },
  content: {
    flex: '1 0 auto',
  },
  media: {
    width: 140,
    height: 100,
  },
  button: {
    margin: 10,
    color: 'white',
    backgroundColor: "#006789"
  },
}

export default class AdvertiserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card style={styles.card}>
      <CardMedia style={styles.media}
          image="http://news2news.today/wp-content/uploads/2017/09/cute-profile-picture-ideas-600x600.jpg"
        />
        <div style={styles.details}>
          <CardContent style={styles.content}>
            <Typography variant="h5" style={styles.header}>
              Esraa Zaitoun
            </Typography>
            <Typography variant="h6">
              FOOD
            </Typography>
            <Typography variant="subtitle1">
              Phone Number: 07895461254
            </Typography>
            <Typography size="small">
              Num. Of Followers: 50000
            </Typography>
          </CardContent>
          <CardActions>
           <Button style={styles.button}>
           + Add Advertisement
           </Button>
        </CardActions>
        </div>
      </Card>
    )
  }
}
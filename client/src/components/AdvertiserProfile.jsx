import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



export default class AdvertiserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibaleBtn: true
    };
  }

  componentDidMount() {
    // to hide the button if the account role user
    if (this.props.user.id_roles === 1) {
      this.setState({ visibaleBtn: false })
    }
  }

  render() {

    const styles = {
      root: {
        display: 'flex',
        justifyContent: 'space-around',
        overflow: 'hidden',
      },
      card: {
        padding: '15px',
        margin: '10px',
        display: 'flex',
        width: "70%"

      },
      details: {
        display: 'flex',
        flexDirection: 'column',
      },
      header: {
        color: "#006789",
      },
      content: {
        flex: '1 0 auto',
      },
      media: {
        width: 220,
        height: 220,
      },
      button: {
        margin: 10,
        color: '#006789',
      },

    }

    return (
      <Grid style={styles.root}>
        <Card style={styles.card}>
          <Grid>
            <CardMedia style={styles.media}
              image="http://news2news.today/wp-content/uploads/2017/09/cute-profile-picture-ideas-600x600.jpg"
            />
          </Grid>
          <Grid>
            <div style={styles.details}>
              <CardContent style={styles.content}>
                <Typography variant="h5" style={styles.header}>
                  {this.props.advertiesr.firstName + " " + this.props.advertiesr.lastName}
                </Typography>
                <Typography variant="h6" style={{ color: 'red' }}>
                  {"Category: " + this.props.advertiesr.name}
                </Typography>
                <Typography variant="subtitle1">
                  {"Gender: " + this.props.advertiesr.gender}
                </Typography>
                <Typography variant="subtitle1">
                  Phone Number: 07895461254
                </Typography>
                <Typography variant="subtitle1">
                  {"Address: " + this.props.advertiesr.location}
                </Typography>
                <Typography variant="subtitle1">
                  <b>{"Followers: " + this.props.advertiesr.numFeedback}</b>
                </Typography>
              </CardContent>
              <CardActions>
                {
                  // check on the button state depend on the user role
                  this.state.visibaleBtn && <Button variant="raised" style={styles.button}>
                    Add Items </Button>
                }
              </CardActions>
            </div>
          </Grid>
        </Card>
      </Grid>
    )
  }
}
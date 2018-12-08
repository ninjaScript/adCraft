import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const style = {
  card: {
    width: "300px",
    maxHeight: 400,
    margin: 7,
  },
  media: {
    height: 140,
  },
  Delet: {
    color: "#cc0000",
  },
  button: {
    marginLeft: 100,
    color: "#006789",
  },
};

export default class AdvertiserItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // hide and show (Edit and Delete button) depend on account role
      visibaleBtn: true,
      open : false
    };
  }

  componentDidMount() {
    // to hide the button if the account role user
    if (this.props.userID === 1) {
      this.setState({ visibaleBtn: false })
    }
  }
 
  // open dialog
  handleClickOpen() {
    this.setState({ open: true });
  };

  // close dialog
  handleClose() {
    this.setState({ open: false });
  };

  deleteItem() {
    console.log("delete the items");
    this.props.deleteItem(this.props.item.id)
    this.handleClose(); 
  }

  render() {
    // this component represent control buttons to delete and edit items 
    // for advertiser 
    const ControleBtns = () => {
      return (
        <div>
          <Button
            variant="outlined"
            style={style.Delet}
            onClick={this.handleClickOpen.bind(this)}
          >
            Delet
        </Button>
          <Button variant="outlined" style={style.button}>
            Edite
        </Button>
        </div>
      )
    }

    return (
      <Grid>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Item</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you shure of delete this Item ??
              </DialogContentText>
            </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.deleteItem.bind(this)} color="primary">
              Delete Item
            </Button>
          </DialogActions>
        </Dialog>
        <Card style={style.card}>
          <CardActionArea>
            <CardMedia style={style.media}
              image={this.props.item.imgUrl}
            />
            <CardContent style={{ textAlign: "left" }}>
              <Typography gutterBottom variant="h6" style={{ "color": "#006789", fontWeight: "bold" }}>
                {this.props.item.name}
              </Typography>
              <Typography variant="subtitle1">
                {"Desc: " + this.props.item.descr}
              </Typography>
              <Typography variant="h6">
                {"Price :" + this.props.item.price + " JD"}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {
              this.state.visibaleBtn && <ControleBtns />
            }
          </CardActions>
        </Card>
      </Grid>
    );
  }
}
// style={{"backgroundColor":"#008ae6"}}
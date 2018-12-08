import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ImgCompAdd from './ImgCompAdd.jsx'

export default class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: " ",
      price: " ",
      descr: " ",
      open: false,
      img: null,
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }


  onFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('myImage', this.state.img);
    formData.append("item", JSON.stringify(
      {
        name: this.state.name,
        price: this.state.price,
        descr: this.state.descr,
        advertiserID: this.props.advertiesrID
      }
    ));

    // call the bind function from advertiserProfile and pass form data
    this.props.addItems(formData);
    
  }




  handleChange(e) {
    e.preventDefault();
    let target = e.target;
    this.setState({ [target.name]: target.value });
  }

  // open dialog
  handleClickOpen() {
    this.setState({ open: true });
  };

  // close dialog
  handleClose() {
    this.setState({ open: false });
  };

  // get image
  getImg(Img) {
    this.setState({ img: Img })
  };

  onClick(e) {
    this.handleClose()
    this.onFormSubmit(e)
  }

  render() {
    return (
      <div>
        {
          // check on the button state depend on the user role
          this.props.visibaleBtn &&
          <Button
            color = "primary"
            variant="contained"
            onClick={this.handleClickOpen}
          >
            Add Items
           </Button>
        }
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Item</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To Add an Item please fill the following Form below.
            </DialogContentText>
            <form
            //  action="/add-item"
            //   method="post" 
            //   encType="multipart/form-data"
            >
              <TextField
                autoFocus
                margin="dense"
                id="name"
                name="name"
                label="Name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                margin="dense"
                id="descr"
                name="descr"
                label="Description"
                type="text"
                value={this.state.descr}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                margin="dense"
                id="price"
                label="Price"
                name="price"
                type="number"
                value={this.state.price}
                onChange={this.handleChange}
                fullWidth
              />
              <ImgCompAdd getImg={this.getImg.bind(this)} />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.onClick} color="primary">
              Add Item
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
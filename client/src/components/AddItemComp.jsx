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
      img: null

    };
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }



  handleChange(e) {
    e.preventDefault();
    let target = e.target;
    this.setState({ [target.name]: target.value });
    console.log(this.state);
  }



  handleClickOpen() {
    this.setState({ open: true });
  };

  handleClose() {
    this.setState({ open: false });
  };


  getImg(Img) {
    this.setState({img: Img})
    console.log(this.state.Img)
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>ADD ITEM</Button>
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
            <form>
	            <TextField
	              autoFocus
	              margin="dense"
	              id="name"
	              name= "name"
	              label="Name"
	              type="text"
	              value={this.state.name}
	              onChange={this.handleChange.bind(this)}
	              fullWidth
	            />
	            <TextField
	              margin="dense"
	              id="descr"
	              name= "descr"
	              label="Description"
	              type="text"
	              value={this.state.descr}
	              onChange={this.handleChange.bind(this)}
	              fullWidth
	            />
	            <TextField
	              margin="dense"
	              id="price"
	              label="Price"
	              name= "price"
	              type="number"
	              value={this.state.price}
	              onChange={this.handleChange.bind(this)}
	              fullWidth
	            />
            </form>
            <ImgCompAdd getImg={this.getImg.bind(this)}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Add Item
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
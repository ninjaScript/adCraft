import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ImgCompAdd from './ImgCompAdd.jsx'
import $ from "jquery";
const axios = require("axios");

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
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }




    handleOnClick(e) {
    e.preventDefault();
    console.log(this.state);
    // if the validation true  send data
    
      $.ajax({
        url: '/add-item',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
         	name: this.state.name,
      		price: this.state.price,
      		descr: this.state.descr,
      		img: this.state.img
        }),
        success: (res) => {
          
        },
        error: (err) => {
          console.log('err', err);
        }
      }); 
    
  }
  onFormSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('myImage',this.state.img);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    //!!!
    axios.post("/add-item",formData,config)
        .then((response) => {
            alert("The file is successfully uploaded");
        }).catch((error) => {
    });
  }




  handleChange(e) {
    e.preventDefault();
    let target = e.target;
    this.setState({ [target.name]: target.value });
    console.log(target.value);
  }



  handleClickOpen() {
    this.setState({ open: true });
  };

  handleClose() {
    this.setState({ open: false });
  };


  getImg(Img) {
    this.setState({img: Img})
  };

  onClick(e) {
  	this.handleClose()
  	this.handleOnClick(e)
  	this.onFormSubmit(e)
  }

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
            <form action="/add-item" method="post" encType="multipart/form-data">
	            <TextField
	              autoFocus
	              margin="dense"
	              id="name"
	              name= "name"
	              label="Name"
	              type="text"
	              value={this.state.name}
	              onChange={this.handleChange}
	              fullWidth
	            />
	            <TextField
	              margin="dense"
	              id="descr"
	              name= "descr"
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
	              name= "price"
	              type="number"
	              value={this.state.price}
	              onChange={this.handleChange}
	              fullWidth
	            />
	            <ImgCompAdd getImg={this.getImg.bind(this)}/>
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
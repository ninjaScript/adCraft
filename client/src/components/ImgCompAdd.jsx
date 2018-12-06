import React from "react";
import "../style/styles.css";
// const axios = require("axios");

export default class ImgCompAdd extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      img: null
    };
    this.fileChangedHandler = this.fileChangedHandler.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this)
  }

	  //file choosing
	fileChangedHandler(event) {
    this.setState({
      img: event.target.files[0],
    })
    this.props.getImg(event.target.files[0])
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
    //!!! TODO
    // axios.post("/",formData,config)
    //     .then((response) => {
    //         alert("The file is successfully uploaded");
    //     }).catch((error) => {
    // });
  }

  onChange(e) {
  	this.fileChangedHandler(e)
  	this.onFormSubmit(e)
  }

	render(){
		return(
			<div>
        <p className="imgTxt">Choose An Image For Item</p>
        <input className="imgBtn" type="file" 
        accept="image/x-png,image/gif,image/jpeg"
        onChange={this.onChange}/>
      </div>
		)
	}

}
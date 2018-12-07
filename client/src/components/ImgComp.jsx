import React from "react";
import "../style/styles.css";


export default class ImgComp extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      img: null
    };
    this.fileChangedHandler = this.fileChangedHandler.bind(this);
    this.onChange = this.onChange.bind(this)
  }

	  //file choosing
	fileChangedHandler(event) {
    this.setState({
      img: event.target.files[0],
    })
    this.props.getImg(event.target.files[0])
  }



  onChange(e) {
  	this.fileChangedHandler(e)
  }

	render(){
		return(
			<div>
        <p className="imgTxt">Choose An Image</p>
        <input className="imgBtn" type="file" 
        accept="image/x-png,image/gif,image/jpeg"
        onChange={this.onChange}/>
      </div>
		)
	}

}
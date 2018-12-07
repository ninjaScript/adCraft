import React from "react";
import "../style/styles.css";


export default class ImgCompAdd extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      img: null
    };
    this.fileChangedHandler = this.fileChangedHandler.bind(this);
  }

	  //file choosing
	fileChangedHandler(event) {
    this.setState({
      img: event.target.files[0],
    })
    console.log(this.state.Img)
    this.props.getImg(event.target.files[0])
  }




	render(){
		return(
			<div>
        <p className="imgTxt">Choose An Image For Item</p>
        <input className="imgBtn" type="file" 
        accept="image/x-png,image/gif,image/jpeg"
        onChange={this.fileChangedHandler}/>
      </div>
		)
	}

}
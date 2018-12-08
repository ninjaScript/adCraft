import React from "react";
import "../style/styles.css";


export default class ImgComp extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      img: null
    };
    this.onfileChangedHandler = this.onfileChangedHandler.bind(this);
  }

	  //file choosing
	onfileChangedHandler(event) {
    this.setState({
      img: event.target.files[0],
    })
    this.props.getImg(event.target.files[0])
  }


	render(){
		return(
			<div>
        <p className="imgTxt">Choose An Image</p>
        <input className="imgBtn" type="file" 
        accept="image/x-png,image/gif,image/jpeg"
        onChange={this.onfileChangedHandler}/>
      </div>
		)
	}

}
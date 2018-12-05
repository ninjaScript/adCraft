import React from "react";
import "../style/styles.css";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBar from 'material-ui-search-bar';


export default class Search extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
  	return(
  		<MuiThemeProvider>
    		<SearchBar
      		onChange={() => console.log('onChange')}
      		onRequestSearch={() => console.log('onRequestSearch')}
      		style={{
       			margin: '0 auto',
        		maxWidth: 800
      		}}
    		/>
    		</MuiThemeProvider>
  		)
	}
}
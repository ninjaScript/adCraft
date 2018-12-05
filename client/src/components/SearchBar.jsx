import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Button, Grid, TextField} from "@material-ui/core";

class SearchBar extends  React.Component {
 
    constructor(props){
      super(props);
      this.state ={
        term: '',
      }
    }

    search (){
      this.props.search(this.state.term);
    }

    handleOnChange(e){
      this.setState({term: e.target.value});
      this.props.search(this.state.term);
    }

  render() {
    const style = {
      searchInput: {
        fontSize: "17px"
      },
      block: {
        display: 'block',
      },
      addUser: {
        marginRight: "10px",
      }, 
    }
    return (
      <div >
        <Grid container center spacing={16} md={8} >
          <Grid item>
            <SearchIcon style={style.block} color="inherit" />
          </Grid>
          <Grid item xs>
            <TextField
              onChange = {this.handleOnChange.bind(this)}
              fullWidth
              placeholder="Search by products advertiser, or City"
            />
          </Grid>
          <Grid item>
            <Button 
              onClick ={this.search.bind(this)}
              variant="contained"
              color="primary" 
              style={style.addUser}
            >
              search
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}



export default SearchBar;

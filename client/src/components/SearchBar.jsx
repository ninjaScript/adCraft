import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Button, Grid, TextField} from "@material-ui/core";

class SearchBar extends  React.Component {

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
              fullWidth
              placeholder="Search by products advertiser, or City"
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" style={style.addUser}>
              search
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}



export default SearchBar;

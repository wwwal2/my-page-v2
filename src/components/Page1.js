import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';

class Page1 extends Component {
  render() {
    const style = {
      Paper: { paddingTop: 10, textAlign: 'center' }
    }
    return (
      <div>
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid container xs={5}>
            <Grid item xs={6}>
              <Paper style={style.Paper}>
              cscsc
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper style={style.Paper}>
              cscsc
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={5}>
              <Paper style={style.Paper}>
              cscsc
              </Paper>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        
      </div>
    );
  }
}

export default Page1;

import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { tabNames } from './store/data';

class Footer extends Component {

  state = {
    value: 0
  };
  
  changeTab = (event, value) => {
    this.setState({ value });
  };

  render() {
    const renderTabs = tabNames.map((item) => {
      return (
        <Tab label={item} />
      )
    })
    return (
      <div>
        <AppBar position="static">
          <Tabs
          onChange={this.handleChange}
          value={0}
          inducatorColor="primary"
          textColor="inherit"
          centered
          >
            {renderTabs}
          </Tabs>
        </AppBar>   
      </div>
    );
  }
}

export default Footer;

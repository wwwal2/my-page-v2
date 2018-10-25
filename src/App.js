import React, { Component } from 'react';
import { Header, Page1, Footer } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <Page1 />
       <Footer />
      </div>
    );
  }
}

export default App;

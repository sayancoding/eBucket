import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';

import HomeArea from "./Components/HomeArea/homeArea";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome</h1>
            <Route path='/' exact component={HomeArea} />
      </div>
    )
  }
}

export default App;
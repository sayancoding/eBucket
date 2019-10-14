import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';

import HomeArea from "./Components/HomeArea/homeArea";
import ShopingArea from './Components/ShopingArea/ShopingHome/shopingHome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome</h1>
            <Route path='/' exact component={HomeArea} />
            <Route path='/shop' exact component={ShopingArea} />
            <Route path='/shop/:ItemId' exact component={ShopingArea} />
      </div>
    )
  }
}

export default App;
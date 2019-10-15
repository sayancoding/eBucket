import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';

import HomeArea from "./Components/HomeArea/homeArea";
import ShopingArea from './Components/ShopingArea/ShopingHome/shopingHome'
import Item_preview from './Containers/Item_Preview/Item_preview'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome</h1>
            <Route path='/' exact component={HomeArea} />
            <Route path='/shop' exact component={ShopingArea} />
            <Route path='/shop/:ItemId' exact component={Item_preview} />
      </div>
    )
  }
}

export default App;
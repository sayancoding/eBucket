import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';

import HomeArea from "./Components/HomeArea/homeArea";
import ShopingArea from './Components/ShopingArea/ShopingHome/shopingHome'
import Item_preview from './Containers/Item_Preview/Item_preview'
import SignIn from './Containers/SignIn/SignIn'
import {auth,createUserProfileDocuments} from './Firebase/firebase.config'


class App extends Component {

  state={
    currentUser : null,
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth)
      {
        const userRef = await createUserProfileDocuments(userAuth);

        userRef.onSnapshot(snapshot=>{
          this.setState({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
          },()=>{
            console.log(this.state);
          })
        })
      }
      else{
        this.setState({
          currentUser:userAuth
        })
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  

  render() {
     
    return (
      <div className="App">
        <h1>Welcome</h1>
            <Route path='/' exact component={HomeArea} />
            <Route path='/shop' exact component={ShopingArea} />
            <Route path='/shop/:ItemId' exact component={Item_preview} />
            <Route path='/signin' exact component={SignIn} />
      </div>
    )
  }
}

export default App;
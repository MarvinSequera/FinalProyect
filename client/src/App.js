import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Service from './service/Auth.service'
import io from 'socket.io-client'


import Index from './components/pages/Index'
import Menu from './components/pages/Menu';
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Navbar from './components/ui/Navbar'
import DishDetail from './components/pages/DishDetail'
import Review from './components/orders/Review'
import Edit from './components/orders/EditDish'
import Preparing from './components/orders/Preparing'
import Kitchen from './components/orders/Kitchen'
import Category from './components/pages/Category'

class App extends Component {
  constructor (){
    super()
    this.state = {loggedInUser:null}
    this._service = new Service()
    this.socket = io(`${process.env.REACT_APP_URL_SOCKET}`)

  }
  setTheUser =user => {
    this.setState({ loggedInUser : user})
  }
  fetchUser = () =>{
    if (this.state.loggedInUser === null) {
      this._service.loggedin()
        .then(theLoggedInUserFromTheServer => this.setState({ loggedInUser: theLoggedInUserFromTheServer.data }))
        .catch(err => {
          this.setState({ loggedInUser: false })
          console.log({ err })
      })
    }
  }


render (){
  this.fetchUser()

  return(
    <>
    <Navbar loggedInUser={this.state.loggedInUser} setUser={this.setTheUser}/>
    <Switch>
    <Route exact path='/' component={Index}/>
    <Route path='/login' render={match => <Login setUser={this.setTheUser}{...match}/>}/>
    <Route path='/signup' render={match => <Signup setUser={this.setTheUser}{...match}/>}/>
    <Route path='/Kitchen' render={()=> <Kitchen loggedInUser={this.state.loggedInUser} socket={this.socket}/>}/>
    <Route exact path='/menu' component={Menu}/>
    <Route path="/menu/detail/:id" component={DishDetail} />
    <Route exact path="/order" render={props=> <Review loggedInUser={this.state.loggedInUser} socket={this.socket}{...props}/>}/>
    <Route path='/menu/:category' render={props=> <Category loggedInUser={this.state.loggedInUser}{...props}/>}/>
    <Route path="/order/preparing" render={props=> <Preparing loggedInUser={this.state.loggedInUser} socket={this.socket}{...props}/>}/>
    <Route path='/edit/:id' component={Edit}/> 
    </Switch>
    </>
  )
}
}

export default App;

import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Blog from './Blog'
import Login from './Login'

class Content extends Component {
  login = user => {
    this.props.login(user)
  }
  render(){
    return (
      <Switch>
        <Route exact path='/' component={Blog} />
        <Route exact path='/login' render={(props)=><Login login={this.login} />} />
      </Switch>
    )
  }
}

export default Content
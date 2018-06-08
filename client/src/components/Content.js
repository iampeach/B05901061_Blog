import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Blog from './Blog'
import Login from './Login'

class Content extends Component {
  render(){
    return (
      <Switch>
        <Route 
          exact path='/' 
          render={(props)=>
            <Blog 
              initialize={this.props.initialize} 
              articles={this.props.articles}
              initialized={this.props.initialized}
              error={this.props.error}
            />} 
        />
        <Route exact path='/login' render={(props)=><Login login={this.props.login} refresh={this.fetchData} />} />
      </Switch>
    )
  }
}

export default Content
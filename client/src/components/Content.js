import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Blog from './Blog'
import Login from './Login'
import AddArticle from './AddArticle'
import EditArticle from './EditArticle'

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
            />
          } 
        />
        <Route exact path='/login' render={(props)=><Login login={this.props.login} refresh={this.fetchData} />} />
        <Route exact path='/add' render={(props)=><AddArticle />} />
        <Route 
          exact path='/edit' 
          render={(props)=>
            <EditArticle 
              initialize={this.props.initialize} 
              articles={this.props.articles} 
              initialized={this.props.initialized}
              error={this.props.error}
            />
          }
        />
        <Redirect from='/del' to='/edit' />
        <Redirect from='/delete' to='/edit' />
      </Switch>
    )
  }
}

export default Content
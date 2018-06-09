import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Blog from './Blog'
import Login from './Login'
import AddArticle from './AddArticle'
import EditArticle from './EditArticle'

class Content extends Component {
  render(){
    console.log(this.props.loggedIn)
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
        {(this.props.loggedIn)
          ? (<Route exact path='/add' render={(props)=><AddArticle />} />)
          : (<Redirect from='/add' to='/login' />)}
        {(this.props.loggedIn)
          ? (<Route 
              exact path='/edit' 
              render={(props)=>
                <EditArticle
                  initialize={this.props.initialize} 
                  articles={this.props.articles} 
                  initialized={this.props.initialized}
                  error={this.props.error}
                />
              }
            />)
          : (<Redirect from='/edit' to='/login' />)}
        <Redirect from='/del' to='/edit' />
        <Redirect from='/delete' to='/edit' />
      </Switch>
    )
  }
}

export default Content
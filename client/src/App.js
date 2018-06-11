import React, { Component } from 'react'
import Header from './components/Header'
import Content from './components/Content'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      username: '',
      initialized: false,
      error: false,
      articles: {
        titles: [],
        bodies: []
      },
    }
  }
  getData = async() => {
    try {
      const res = await fetch('https://blog-ozsjuinoak.now.sh')
      const json = await res.json()
      var articles = {
        titles: [],
        bodies: []
      }
      for (let i = 0; i < json.length; ++i){
        articles.titles.push(json[i].titles)
        articles.bodies.push(json[i].bodies)
      }
      this.setState({ articles: articles, initialized: true })
    }
    catch(err) {
     console.log('fetch failed', err)
     this.setState({ error: true })
    }
  }
  setUser = user => {
    this.setState({ loggedIn: true, username: user })
  }
  render() {
    return (
      <div>
        <Header loggedIn={this.state.loggedIn} username={this.state.username} refresh={this.getData}/>
        <Content
          loggedIn={this.state.loggedIn}
          login={this.setUser}
          initialize={this.getData} 
          articles={this.state.articles}
          initialized={this.state.initialized}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
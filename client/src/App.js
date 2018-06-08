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
  fetchData = async() => {
    // Promise
    /*
    fetch('http://127.0.0.1:8080')
      .then(res => res.json())
      .then(res => this.setState({ articles: res, initialized: true }))
      .catch((err => console.log(err)))
    */
    // Async and Await
    try {
      const res = await fetch('http://127.0.0.1:8080')
      const json = await res.json()
      this.setState({ articles: json, initialized: true })
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
        <Header loggedIn={this.state.loggedIn} username={this.state.username} refresh={this.fetchData}/>
        <Content 
          login={this.setUser}
          initialize={this.fetchData} 
          articles={this.state.articles}
          initialized={this.state.initialized}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;

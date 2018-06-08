import React, { Component } from 'react'
import Header from './components/Header'
import Content from './components/Content'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      username: '',
    }
  }
  setUser = user => {
    this.setState({ loggedIn: true, username: user })
  }
  render() {
    return (
      <div>
        <Header loggedIn={this.state.loggedIn} username={this.state.username} />
        <Content login={this.setUser}/>
      </div>
    );
  }
}

export default App;

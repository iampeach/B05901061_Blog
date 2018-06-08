import React, { Component } from 'react'
import RightElement from './RightElement'
import LeftElement from './LeftElement'

class Header extends Component {
  render() {
    const metabar = {
      position: 'fixed',
      width: '100%',
      height: '100px',
      backgroundColor: 'white',
    }
    const header = {
      margin: '0 auto',
      maxWidth: '1000px',
    }
    return (
      <div style={metabar}>
        <div style={header}>
          <LeftElement refresh={this.props.refresh}/>
          <RightElement loggedIn={this.props.loggedIn} username={this.props.username} />
        </div>
      </div>
    )
  }
}

export default Header
import React, { Component } from 'react'

class Header extends Component {
  render() {
    const metabar = {
      position: 'fixed',
      width: '100%',
      height: '100px',
      backgroundColor: 'white',
      //boxShadow: '1px 0px 5px #262626'
    }
    const header = {
      margin: '0 auto',
      maxWidth: '1000px',
    }
    return (
      <div style={metabar}>
        <div style={header}>
          <LeftElement />
          <RightElement loggedIn={this.props.loggedIn} username={this.props.username} />
        </div>
      </div>
    )
  }
}

const LeftElement = () => {
  const left = {
    float: 'left',
  }
  return (
    <div style={left}>
      <h1> Blog Title </h1>
    </div>
  )
}

const RightElement = ({loggedIn, username}) => {
  const right = {
    float: 'right',
  }
  return (
    <div style={right}>
      <h1> { `${username}` } </h1>
    </div>
  )
}

export default Header
import React, { Component } from 'react'

const refresh = () => {
  window.location = '/'
}

class LeftElement extends Component {
  render() {
    const left = {
      float: 'left',
      cursor: 'pointer',
    }
    return (
      <div style={left}>
        <h1 onClick={refresh}> Blog Title </h1>
      </div>
    )
  }
}

export default LeftElement

import React, { Component } from 'react'

class LeftElement extends Component {
  render() {
    const left = {
      float: 'left',
      cursor: 'pointer',
    }
    return (
      <div style={left}>
        <h1 onClick={this.props.refresh}> Blog Title </h1>
      </div>
    )
  }
}

export default LeftElement

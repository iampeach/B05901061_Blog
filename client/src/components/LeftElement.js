import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class LeftElement extends Component {
  refresh = () => {
    this.props.refresh()
    this.props.history.push('/')
  }
  render() {
    const left = {
      float: 'left',
      cursor: 'pointer',
    }
    return (
      <div style={left}>
        <h1 onClick={()=>this.refresh()}> Blog Title </h1>
      </div>
    )
  }
}

export default withRouter(LeftElement)

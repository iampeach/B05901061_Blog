import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class RightElement extends Component {
  handleClick = () => {
    this.props.history.push('/login')
  }
  render() {
    const right = {
      float: 'right',
    }
    var rightElement
    if (this.props.loggedIn) rightElement = <h1> { this.props.username } </h1>
    else rightElement = <button onClick={()=>this.handleClick()}> Login </button>
    return (
      <div style={right}>
        {rightElement}
      </div>
    )
  }
}

export default withRouter(RightElement)

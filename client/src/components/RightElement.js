import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class RightElement extends Component {
  handleLoginClick = () => {
    this.props.history.push('/login')
  }
  handleUserClick = () => {
    this.props.history.push('/edit')
  }
  render() {
    const right = {
      float: 'right',
    }
    var rightElement
    if (this.props.loggedIn) rightElement = <h1> <button onClick={()=>this.handleUserClick()}> { this.props.username } </button> </h1>
    else rightElement = <button onClick={()=>this.handleLoginClick()}> Login </button>
    return (
      <div style={right}>
        {rightElement}
      </div>
    )
  }
}

export default withRouter(RightElement)

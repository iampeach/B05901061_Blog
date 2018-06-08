import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        inputAccount: '',
        inputPassword: '',
        errorText: '',
    };
  }
  updateInputAccount = e => {
    this.setState({ inputAccount: e.target.value })
  }
  updateInputPassword = e => {
    this.setState({ inputPassword: e.target.value })
  }
  handleClick = () => {
    if (this.state.inputAccount==='admin' && this.state.inputPassword==='admin'){
      this.props.login('admin')
      this.props.history.push('/')
    }
    else
      this.setState({ errorText: 'Not Exist' })
  }
  render() {
    const login = {
      margin: '0 auto',
      padding: '100px 0 0 0',
      backgroundColor: 'rgb(255, 255, 200)',
      width: '400px',
      height: '600px',
      display: 'flex',
      flexDirection: 'column',
    }
    const input = {
    }
    const error = {
      color: 'red',
    }
    return (
      <div>
        <div style={login}>
          <input type="text" placeholder="Username" style={input} onChange={(e)=>this.updateInputAccount(e)} />
          <input type="text" placeholder="Password" style={input} onChange={(e)=>this.updateInputPassword(e)} />
          <button onClick={()=>this.handleClick()}> Login </button>
          <p style={error}> {this.state.errorText} </p>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)
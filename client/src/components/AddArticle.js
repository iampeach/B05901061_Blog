import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class AddArticle extends Component {
  handleClick = async () => {
    await this.postData()
    this.props.history.push('/edit')
  }
  postData = async() => {
    try {
      const req = {
        method: 'POST',
        body: JSON.stringify({
          title: this.refs.title.value,
          body: this.refs.body.value
        }),
        headers: { "Content-Type": "application/json" }
      }
      await fetch('http://127.0.0.1:8080', req)
    }
    catch(err) {
      console.log('fetch failed', err)
    }
  }
  render(){
    return(
      <div style={{padding: '100px 500px', display: 'flex', flexDirection: 'column'}}>
        <input type="text" placeholder="title" ref="title" />
        <input type="text" placeholder="body" ref="body" />
        <input type="submit" onClick={()=>this.handleClick()}/>
      </div>
    )
  }
}

export default withRouter(AddArticle)
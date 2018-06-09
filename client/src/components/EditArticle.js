import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class EditArticle extends Component {
  handleAddClick = () => {
    this.props.history.push('/add')
  }
  handleDelClick = async id => {
    await this.delData(id)
    this.props.initialize()
  }
  delData = async title => {
    try {
      console.log(title)
      const req = {
        method: 'DELETE',
        body: JSON.stringify({
          title: title
        }),
        headers: { "Content-Type": "application/json" }
      }
      await fetch('http://127.0.0.1:8080', req)
    }
    catch(err) {
      console.log('fetch failed', err)
    }
  }
  componentDidMount = () => {
    this.props.initialize()
  }
  render(){
    const { initialized, error } = this.props
    if (error) return(<p style={{padding: '100px'}}> Error </p>)
    if (!initialized) return (<p style={{padding: '100px'}}> Loading... </p>)

    // construct table
    var table = []
    table.push(
      <thead key={0}>
        <tr key={0} style={{textAlign: 'left'}}>
          <th>title</th>
          <th>body</th>
          <th>DEL</th>
        </tr>
      </thead>
    )
    var tbody = []
    for (let i = 0; i < this.props.articles.titles.length; ++i) {
      tbody.push(
        <tr key={i+1}>
          <td>{this.props.articles.titles[i]}</td>
          <td>{this.props.articles.bodies[i]}</td>
          <td><button onClick={()=>this.handleDelClick(this.props.articles.titles[i])}>DEL</button></td>
        </tr>
      )
    }
    tbody.push( 
      <tr key={this.props.articles.titles.length+1}>
        <td><button onClick={()=>this.handleAddClick()}>ADD</button></td>
        <td></td>
        <td></td>
      </tr>
    )
    table.push( <tbody key={1}>{tbody}</tbody> )

    return(
      <div style={{padding: '100px 500px', display: 'flex', flexDirection: 'column'}}>
        <table>
          {table}
        </table>
      </div>
    )
  }
}

export default withRouter(EditArticle)
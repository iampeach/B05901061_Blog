import React, { Component } from 'react'

class Articles extends Component {
  render() {
    const outerContainer = {
      backgroundColor: 'white',
    }
    const articles = {
      margin: '0 auto',
      width: '1000px',
      height: '2000px',
    }
    return (
      <div style={outerContainer}>
        <div style={articles}>
          <h1>{this.props.articles.titles[this.props.curArticle]}</h1>
          <pre>{this.props.articles.bodies[this.props.curArticle]}</pre>
        </div>
      </div>
    )
  }
}

export default Articles
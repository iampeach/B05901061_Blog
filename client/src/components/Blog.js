import React, { Component } from 'react'
import ArticleList from './/ArticleList'
import Articles from './Articles'

class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialized: false,
      articles: {
        titles: [],
        bodies: []
      },
      curArticle: 0
    }
  }
  initialize = data => {
    this.setState({ articles: data })
  }
  componentDidMount = async() => {
    // Promise
    /*
    fetch('http://127.0.0.1:8080')
      .then(res => res.json())
      .then(res => this.setState({ articles: res, initialized: true }))
      .catch((err => console.log(err)))
    */
    // Async and Await
    try {
      const res = await fetch('http://127.0.0.1:8080')
      const json = await res.json()
      this.setState({ articles: json, initialized: true })
    }
    catch(err) {
     console.log('fetch failed', err)
    }
  }
  changeCurArticle = id => {
    this.setState({ curArticle: id })
  }
  render() {
    const { initialized } = this.state
    return (
      <div>
        {initialized
        ? <div>
            <ArticleList titles={this.state.articles.titles} onClick={this.changeCurArticle} />
            <Articles articles={this.state.articles} curArticle={this.state.curArticle} />
          </div>
        : <p style={{padding: '100px'}}> Loading... </p> }
      </div>
    )
  }
}

export default Blog
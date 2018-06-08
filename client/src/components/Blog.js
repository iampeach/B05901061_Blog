import React, { Component } from 'react'
import ArticleList from './/ArticleList'
import Articles from './Articles'

class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      curArticle: 0
    }
  }
  componentDidMount = () => {
    this.props.initialize()
  }
  changeCurArticle = id => {
    this.setState({ curArticle: id })
  }
  render() {
    const { initialized, error } = this.props
    if (error) return(<p style={{padding: '100px'}}> Error </p>)
    if (!initialized) return (<p style={{padding: '100px'}}> Loading... </p>)
    return(
      <div>
        <ArticleList titles={this.props.articles.titles} onClick={this.changeCurArticle} />
        <Articles articles={this.props.articles} curArticle={this.state.curArticle} />
      </div>
    )
  }
}

export default Blog
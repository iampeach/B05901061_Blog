import React, { Component } from 'react'
import ArticleList from './/ArticleList'
import Articles from './Articles'

class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: {
        titles: [
          '人生怎麼這麼難',
          '現在放棄暑假就開始了',
          '為什麼WEB作業這麼多',
          '自SA貓貓',
        ],
        bodies: [
          '人生就4這麼難',
          '暑假開始然後就結束了',
          '而且跟人生一樣難',
          '自SA貓貓'
        ]
      },
      curArticle: 0
    }
  }
  changeCurArticle = id => {
    this.setState({ curArticle: id })
  }
  render() {
    return (
      <div>
        <ArticleList titles={this.state.articles.titles} onClick={this.changeCurArticle} />
        <Articles articles={this.state.articles} curArticle={this.state.curArticle} />
      </div>
    )
  }
}

export default Blog
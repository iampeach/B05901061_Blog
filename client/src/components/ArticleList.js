import React, { Component } from 'react'
import ArticleBlock from './ArticleBlock';
import './ArticleList.css'

class ArticleList extends Component {
  handleClick = id => {
    this.props.onClick(id)
  }
  render() {
    const upperelement = {
      height: '500px',
      backgroundColor: 'rgb(255, 255, 250)',
    }
    var articleblocks = []
    for (let i = 0; i < this.props.titles.length; ++i) {
      articleblocks.push(<ArticleBlock key={i} title={this.props.titles[i]} onClick={()=>this.handleClick(i)} />)
    }
    return (
      <div style={upperelement}>
        <div className='ArticleList'>
          {articleblocks}
        </div>
      </div>
    )
  }
}

export default ArticleList
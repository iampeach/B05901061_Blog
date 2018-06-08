import React, { Component } from 'react'

class ArticleBlock extends Component {
  handleClick = () => {
    this.props.onClick()
  }
  render() {
    const articleblock = {
      padding: '10px',
      flex: '0 0 auto',
      cursor: 'pointer',
    }
    const innerblock = {
      margin: 0,
      width: '300px',
      height: '280px',
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '1px 1px 10px #e5e5e5',
    }
    return (
      <div style={articleblock} onClick={()=>this.handleClick()}>
        <div style={innerblock}>
          <Thumbnail />
          <Title text={this.props.title}/>
        </div>
      </div>
    )
  }
}

const Thumbnail = () => {
  const thumbnail = {
    height: '100px',
  }
  return (
    <div style={thumbnail} />
  )
}

const Title = ({ text }) => {
  const title = {
    margin: 0,
    padding: '15px',
  }
  return (
    <div>
      <h2 style={title}> { `${text}` } </h2>
    </div>
  )
}

export default ArticleBlock
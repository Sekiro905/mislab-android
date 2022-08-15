import React, { Component } from 'react'
import './index.css'

export default class Tag extends Component {
  render() {
    let {className , tag} = this.props

    return (
      <span className={`${className} tag`} children={tag}></span>
    )
  }
}

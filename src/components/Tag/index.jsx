import React, { Component } from 'react'
import './index.css'

export default class Tag extends Component {
  render() {
    return (
      <span className={`${this.props.className} tag`} children={this.props.tag}></span>
    )
  }
}

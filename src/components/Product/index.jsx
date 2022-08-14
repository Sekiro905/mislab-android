import React, { Component } from 'react'
import './index.css'

export default class Product extends Component {
  render() {
    return (
      <div className={`${this.props.productTheme} item`}>
        <div className='product-img-outer'><img alt='产品介绍图片' src={require(`../../assets/${this.props.productTheme}.png`)}></img></div>
        <div className='product-more-outer'>
            <div className='product-title' children={`${this.props.title}`}></div>
            <div className={`${this.props.supplementClass} product-supplement`} children={`${this.props.supplement}`}></div>
            <div className='product-detail' children={`${this.props.detail}`}></div>
        </div>
      </div>
    )
  }
}

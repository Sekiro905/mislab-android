import React, { Component } from 'react'
import './index.css'

export default class Product extends Component {
  render() {
    let { imgOuterClass, productTheme, title, supplementClass, supplement, detail, src } = this.props

    return (
      <div className={`${productTheme} item`}>
        <div className={`${imgOuterClass}`}><img alt='产品介绍图片' src={require(`../../assets/${src}.png`)}></img></div>
        <div className='product-more-outer'>
          <div className='product-top'>
            <div className='product-title' children={`${title}`}></div>
            <div className={`${supplementClass} product-supplement`} children={`${supplement}`}></div>
          </div>
          <div className='product-detail' children={`${detail}`}></div>
        </div>
      </div>
    )
  }
}

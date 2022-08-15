import React, { Component } from 'react'
import './index.css'

export default class Product extends Component {
  render() {
    let {productTheme , title , supplementClass , supplement , detail} = this.props

    return (
      <div className={`${productTheme} item`}>
        <div className='product-img-outer'><img alt='产品介绍图片' src={require(`../../assets/${this.props.src}.png`)}></img></div>
        <div className='product-more-outer'>
            <div className='product-title' children={`${title}`}></div>
            <div className={`${supplementClass} product-supplement`} children={`${supplement}`}></div>
            <div className='product-detail' children={`${detail}`}></div>
        </div>
      </div>
    )
  }
}

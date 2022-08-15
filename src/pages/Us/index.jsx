import React, { Component } from "react";
import { Image } from "antd";
import styles from "./index.module.css";
import Tag from "../../components/Tag";

export default class Us extends Component {
  render() {
    const {stateUs}=this.props

    return (
      <div className="us-wrapper">
        <div className={styles.back}>
          <div className={styles.head}>
            <div className={styles.title}>
              <span>关于我们</span>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles["us-pic-wall-outer"]}>
               <div className={styles.pic1}><Image preview={false} width={140} alt="合照" src={require('../../assets/pic7.jpg')}/></div>
               <div className={styles.pic2}><Image preview={false} width={110} alt="产品和机器学习" src={require('../../assets/pic3.jpg')} /></div>
               <div className={styles.pic3}><Image preview={false} width={130} alt="后端" src={require('../../assets/pic4.jpg')} /></div>
               <div className={styles.pic4}><Image preview={false} width={115} alt="大三大四学长学姐" src={require('../../assets/pic5.jpg')} /></div>
               <div className={styles.pic5}><Image preview={false} width={130} alt="前端" src={require('../../assets/pic8.jpg')} /></div>
            </div>
            <div className={styles["us-pic-outer"]}>
              <img alt="关于我们图片" src={require('../../assets/us.png')}></img>
              <Tag tag='创新' className={stateUs?'cx-show':'cx'} />
              <Tag tag='年轻' className={stateUs?'nq-show':'nq'} />
              <Tag tag='周会' className={stateUs?'zh-show':'zh'} />
              <Tag tag='分享日' className={stateUs?'fx-show':'fx'} />
              <Tag tag='黑客马拉松文化周' className={stateUs?'hk-show':'hk'} />
              <Tag tag='百名工程师' className={stateUs?'bm-show':'bm'} />
              <Tag tag='人才培养' className={stateUs?'rc-show':'rc'} />
              <Tag tag='技术应用' className={stateUs?'js-show':'js'} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

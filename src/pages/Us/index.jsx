import React, { Component } from "react";
import styles from "./index.module.css";
import Tag from "../../components/Tag";

export default class Us extends Component {
  render() {
    const { stateUs } = this.props;

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
              <div className={styles.pic1}>
                <img alt="合照" src={require("../../assets/pic7.jpg")} />
              </div>
              <div className={styles.pic2}>
                <img
                  alt="产品和机器学习"
                  src={require("../../assets/pic3.jpg")}
                />
              </div>
              <div className={styles.pic3}>
                <img alt="后端" src={require("../../assets/pic4.jpg")} />
              </div>
              <div className={styles.pic4}>
                <img alt="学长学姐" src={require("../../assets/pic5.jpg")} />
              </div>
              <div className={styles.pic5}>
                <img alt="前端" src={require("../../assets/pic8.jpg")} />
              </div>
              <div className={styles.pic6}>
                <img alt="合照" src={require("../../assets/pic1.jpg")} />
              </div>
              <div className={styles.pic7}>
                <img alt="学长学姐" src={require("../../assets/pic2.jpg")} />
              </div>
              <div className={styles.pic8}>
                <img alt="学长学姐" src={require("../../assets/pic9.jpg")} />
              </div>
              <div className={styles.pic9}>
                <img alt="学长学姐" src={require("../../assets/pic10.jpg")} />
              </div>
            </div>
            <div className={styles["us-pic-outer"]}>
              <img
                alt="关于我们图片"
                src={require("../../assets/us.png")}
              ></img>
            </div>
            <div className={styles["us-tag-outer"]}>
              <Tag tag="创新" className={stateUs ? "cx-show" : "cx"} />
              <Tag tag="年轻" className={stateUs ? "nq-show" : "nq"} />
              <Tag tag="周会" className={stateUs ? "zh-show" : "zh"} />
              <Tag tag="分享" className={stateUs ? "fx-show" : "fx"} />
              <Tag
                tag="黑客马拉松文化周"
                className={stateUs ? "hk-show" : "hk"}
              />
              <Tag tag="百名工程师" className={stateUs ? "bm-show" : "bm"} />
              <Tag tag="人才培养" className={stateUs ? "rc-show" : "rc"} />
              <Tag tag="技术日" className={stateUs ? "js-show" : "js"} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

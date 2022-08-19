import React, { Component } from "react";

import styles from "./index.module.css";
import "../../static/iconfont.css";

export default class Invatation extends Component {
  render() {
    return (
      <div className="invatation-wrapper">
        <div className={styles.back}>
          {/* 板块标题 */}
          <div className={styles.head}>
            <div className={styles.tittle}>报名流程</div>
          </div>
          {/* 招新流程以及内容 */}
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.enroll}>
                <img
                  src={require("../../assets/liucheng1.png")}
                  alt="图片加载失败."
                  className={styles["top-img"]}
                />
                <p>报名/预习</p>
                <span>8月中旬—9月中旬</span>
              </div>

              <div className={styles.arrow}>
                <i className="iconfont" style={{ fontSize: "28px" }}>
                  &#xe61a;
                </i>
              </div>

              <div className={styles.cultivate}>
                <img
                  src={require("../../assets/liucheng2.png")}
                  alt="图片加载失败."
                  className={styles["top-img"]}
                />
                <p>招新/培训</p>
                <span>9月中旬—12月中旬</span>
              </div>

              <div className={styles.arrow}>
                <i className="iconfont" style={{ fontSize: "28px" }}>
                  &#xe61a;
                </i>
              </div>

              <div className={styles.project}>
                <img
                  src={require("../../assets/liucheng3.png")}
                  alt="图片加载失败."
                  className={styles["top-img"]}
                />
                <p>offer/项目</p>
                <span>12月中旬—长期</span>
              </div>
            </div>
            <div className={styles.middle}>
              <span>想和优秀的你&nbsp;&nbsp;一起改变世界</span>
            </div>
            <div className={styles.down}>
              <img
                className={styles["down-img"]}
                src={require("../../assets/jiaru.png")}
                alt="图片加载失败."
              />
              <a href="https://jq.qq.com/?_wv=1027&k=NNPyqnRr" className={styles.link}></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

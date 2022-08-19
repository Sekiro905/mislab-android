import React, { Component } from "react";

import leftMember from "../../static/leftMember.json";
import rightMember from "../../static/rightMember.json";

import styles from "./index.module.css";

export default class Member extends Component {
  render() {
    const { stateMember } = this.props;
    return (
      <div className="member-wrapper">
        <div className={styles.back}>
          {/* 板块标题 */}
          <div className={styles.head}>
            <div className={styles.tittle}>可能的未来</div>
          </div>

          {/* 弹幕区域 */}
          <div className={styles.content}>
            {/* 左侧 */}
            <div
              className={
                stateMember ? styles["member-left-show"] : styles["member-left"]
              }
            >
              {leftMember.map((item) => {
                return (
                  <div key={item.name} className={styles.left}>
                    {item.name}—{item.company}
                  </div>
                );
              })}
            </div>
            {/* 右侧 */}
            <div
              className={
                stateMember
                  ? styles["member-right-show"]
                  : styles["member-right"]
              }
            >
              {rightMember.map((item) => {
                return (
                  <div key={item.name} className={styles.right}>
                    {item.name}—{item.company}
                  </div>
                );
              })}
            </div>
          </div>
          {/* 底部图片 */}
          <div className={styles.footer}>
            <img
              className={styles["footer-img"]}
              src={require("../../assets/member-footer.png")}
              alt="图片加载失败."
            />
          </div>
        </div>
      </div>
    );
  }
}

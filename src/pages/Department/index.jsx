import React, { Component } from "react";

import DepartLeft from "../../components/DepartLeft";
import DepartRight from "../../components/DepartRight";

import styles from "./index.module.css";
import "./index.css";

export default class Department extends Component {
  render() {
    const {stateDepart:{stateDepartA,stateDepartB,stateDepartC}}=this.props

    return (
      <div className="department-intro-wrapper">
        <div className={styles.back}>
          {/* 板块标题 */}
          <div className={styles.head}>
            {" "}
            <div className={styles.tittle}>部门介绍</div>
          </div>
          <div className={styles.content}>
            {/* 背景折线 */}
            <div className={styles["line-back"]}>
              <div className={styles["line-box"]}>
                <div className={styles["line-group"]}>
                  <div className={styles.lineL}></div>
                  <div className={styles.lineR}></div>
                </div>
              </div>
              <div className={styles["line-box"]}>
                <div className={styles["line-group"]}>
                  <div className={styles.lineL}></div>
                  <div className={styles.lineR}></div>
                </div>
              </div>
              <div className={styles["line-box"]}>
                <div className={styles["line-group"]}>
                  <div className={styles.lineL}></div>
                  <div className={styles.lineR}></div>
                </div>
              </div>
            </div>
            {/* 各部门介绍 */}
            <div className={styles["depart-back"]}>
              <DepartLeft
                className={stateDepartA?'web-show':'web'}
                title="Web开发部"
                content="前端即网站前台部分，运行在PC端，移动端等浏览器上展现给用户浏览的网页。
                    前端开发人员可以使用完美的动效设计和前端技术，给用户带来极高的页面视觉体验和用户交互体验。"
              />

              <DepartRight
                className={stateDepartA?'back-end-show':'back-end'}
                title="后端开发部"
                content="后端开发指的是运行在后台并且控制前端的内容，它负责程序设计架构以及数据库管理和处理相关的业务逻辑。
                    它主要考虑的是对于业务的控制和处理，功能的实现以及数据的操作。"
              />

              <DepartLeft
                className={stateDepartB?'product-show':'product'}
                title="产品设计部"
                content="捕捉事物间逻辑，倾听用户们需求，结合各平台数据，设计最好用产品。来产品设计部,
                    培养更缜密的思维，学习产品设计，将从道术器三个层面，建立自己与互联网产品的亲密联系。"
              />

              <DepartRight
                className={stateDepartB?'robot-show':'robot'}
                title="大数据与人工智能部"
                content="大数据与人工智能从历史数据中学习规律，将规律应用到未来中。我们致力于研究如何
                通过计算的手段，利用数据构建模型，量化过去，预测未来。"
              />

              <DepartLeft
                className={stateDepartC?'android-show':'android'}
                title="Android开发部"
                content="Android开发是指从
                    事Android系统操作应用和各种Android平台功能应用，
                    以安卓平台为对象，通过Android
                    studio来布局设计界面与接口实现功能从而达到开发手机软件app。"
              />
            </div>
          </div>
          <div className={styles.footer}>
            <img
              className={styles["footer-img"]}
              src={require("../../assets/department-footer.png")}
              alt="图片加载失败."
            />
          </div>
        </div>
      </div>
    );
  }
}

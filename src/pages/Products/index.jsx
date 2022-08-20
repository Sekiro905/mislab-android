import React, { Component } from "react";
import styles from "./index.module.css";
import Product from "../../components/Product";

export default class Products extends Component {
  render() {
    const {stateProduct}=this.props

    return (
      <div className="products-intro-wrapper">
        <div className={styles.back}>
          <div className={styles.head}>
            <div className={styles.title}>
              <span>产品介绍</span>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles["products-intro-outer"]}>
              <Product
                productTheme={stateProduct?'youwen-show':'youwen'}
                title="邮问必答"
                supplement="服务于重庆邮电大学学生处学业辅导中心"
                supplementClass='ywbd'
                detail="招募学业优秀、乐于助人的志愿者，针对数理、英语和专业等课程面向全校同学提供答疑服务。"
                src="youwen"
                imgOuterClass='yw-img-outer'
              />
              <Product
                productTheme={stateProduct?'erp-show':'erp'}
                title="ERP虚拟运营系统"
                supplement="系统在信管必修课上长期使用"
                supplementClass='erpxt'
                detail="通过构建一个虚拟的市场环境,让受训者充当企业的CEO,体会如何管理企业中的物资流动、资金流动和信息流动。"
                src='erp'
                imgOuterClass='erp-img-outer'
              />
            </div>
            <div className={styles["products-brief-intro-outer"]}>
              <p className={styles["products-brief-intro"]}>
                工作室目前主要有三个大项目。
                <br />
                分别是ERP虚拟运营系统,邮问必答,物流路径规划系统,用于保证工作室同学手里都可以利用项目进行实战学习。
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
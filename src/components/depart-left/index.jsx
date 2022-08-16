import React, { Component } from "react";
import styles from "./index.module.css";

export default class DepartLeft extends Component {
  render() {
    const { className, title, content } = this.props;
    return (
      <div className={[`${className} ${styles.depart}`]}>
        <div
          className={`${styles["dep-title"]} dep-title `}
          children={<p>{title}</p>}
        ></div>
        <div
          className={`${styles["dep-content"]} dep-content-left `}
          children={<p>{content}</p>}
        ></div>
      </div>
    );
  }
}

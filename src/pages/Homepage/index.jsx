import React, { Component } from "react";
import { Link } from "react-scroll";
import styles from "./index.module.css";

export default class Homepage extends Component {
  render() {
    return (
      <div className="homepage-wrapper">
        <div className={styles.back}>
          <div className={styles.content}>
            <div className={styles["homepage-title-outer"]}>
              <div>
                <span className={styles["homepage-title1"]}>Mislab</span>
                <span className={styles["homepage-title2"]}>信管工作室</span>
              </div>
            </div>
            <div className={styles["right-graphic1-outer"]}></div>
            <div className={styles["left-graphic-outer"]}></div>
            <div className={styles["right-graphic2-outer"]}></div>
            <div className={styles["middle-slogan-outer"]}>
              <div>
                <span className={styles.slogan1}>和优秀的人</span>
                <span className={styles.slogan2}>做有挑战的事</span>
                <div className={styles["slogan3-outer"]}>
                  <span className={styles.slogan3}>JOIN MISLAB</span>
                </div>
              </div>
            </div>
            <Link
            to="Team"
            smooth={true}
            duration={500}
            spy={true}
            >
              <div className={styles["foot-plane-outer"]}>
                <img src={require("../../assets/feiji.png")} alt="纸飞机" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

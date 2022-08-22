import React, { Component } from 'react'
import { Element } from "react-scroll";
import styles from './index.module.css'

export default class Team extends Component {
  render() {
    return (
      <Element name="Team">
      <div className='team-intro-wrapper'>
        <div className={styles.back}>
          <div className={styles.head}>
            <div className={styles.title}>
              <span>团队介绍</span>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles["team-intro-outer"]}>
                <span className={styles["team-intro"]}>
                  信管工作室(又名Mislab)成立于2008年，是一个发展内部成员专业技能与专业素养、提升信管专业技术氛围的学生组织。在十余年的成长过程当中，我们不断的探索，不断的创新，逐渐完善自身技术体系，扩大团队规模，乐于与优秀的人做有挑战的事。我们希望并也一直在努力将一些成功经验和有趣的团队文化传播出去影响更多的人。
                </span>
            </div>
            <div className={styles["team-pic-outer"]}>
              <img alt='团队介绍图片' src={require('../../assets/team.png')}></img>
            </div>
          </div>
        </div>
      </div>
      </Element>
    )
  }
}

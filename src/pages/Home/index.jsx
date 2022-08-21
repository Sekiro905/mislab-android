import React, { Component } from "react";
import Homepage from "../Homepage";
import Team from "../Team";
import Us from "../Us";
import Products from "../Products";
import Department from "../Department";
import Member from "../Member";
import Invatation from "../Invatation";

export default class Home extends Component {
  state = {
    // 关于我们动画状态
    stateUs: false,
    // 产品介绍状态
    stateProduct: false,
    // 部门介绍状态
    stateDepartA: false,
    stateDepartB: false,
    stateDepartC: false,
    // 成员弹幕状态
    stateMember: false,
  };
  render() {
    const {
      stateUs,
      stateProduct,
      stateDepartA,
      stateDepartB,
      stateDepartC,
      stateMember,
    } = this.state;
    const stateDepart = {
      stateDepartA,
      stateDepartB,
      stateDepartC,
    };
    window.onscroll = () => {
      // 关于我们
      let scollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      if (scollTop >= 1320) {
        this.setState({ stateUs: true });
      }
      // 产品介绍
      if (scollTop >= 1580) {
        this.setState({ stateProduct: true });
      }
      // 部门介绍
      if (scollTop >= 2320) {
        this.setState({ stateDepartA: true });
      }
      if (scollTop >= 2600) {
        this.setState({ stateDepartB: true });
      }
      if (scollTop >= 2780) {
        this.setState({ stateDepartC: true });
      }
      // 成员弹幕
      if (scollTop >= 3200) {
        this.setState({ stateMember: true });
      }
    };
    return (
      <div>
        <Homepage />
        <Team />
        <Us stateUs={stateUs} />
        <Products stateProduct={stateProduct} />
        <Department stateDepart={stateDepart} />
        <Member stateMember={stateMember} />
        <Invatation />
      </div>
    );
  }
}

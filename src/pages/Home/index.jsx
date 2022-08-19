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
      console.log(document.documentElement.scrollTop);
      if (document.documentElement.scrollTop >= 1250) {
        this.setState({ stateUs: true });
      }
      // 产品介绍
      if (document.documentElement.scrollTop >= 1470) {
        this.setState({ stateProduct: true });
      }
      // 部门介绍
      if (document.documentElement.scrollTop >= 2230) {
        this.setState({ stateDepartA: true });
      }
      if (document.documentElement.scrollTop >= 2480) {
        this.setState({ stateDepartB: true });
      }
      if (document.documentElement.scrollTop >= 2780) {
        this.setState({ stateDepartC: true });
      }
      // 成员弹幕
      if (document.documentElement.scrollTop >= 3180) {
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

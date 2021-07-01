import React from "react";
import './index.css';
import { Layout } from 'antd';
const { Header } = Layout;

export default class HeaderL extends React.Component {
  render() {
    return (<Header>
      <div>头部栏</div>
    </Header>)
  }
}
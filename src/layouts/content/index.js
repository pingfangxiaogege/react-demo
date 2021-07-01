import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Routers from '../../router';
import { Layout } from 'antd';
const { Content } = Layout;

export default class ContentL extends React.Component {
  render() {
    return (<BrowserRouter>
      <Content>
        <Routers />
      </Content>
    </BrowserRouter>)
  }
}
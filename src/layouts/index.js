import React from 'react';
import SiderL from './sider';
import HeaderL from './header';
import ContentL from './content';
import { Layout } from 'antd';


export default class Layouts extends React.Component {
  render() {
    return (<Layout style={{ height: '100vh' }}>
      <SiderL></SiderL>
      <Layout>
        <HeaderL></HeaderL>
        <ContentL></ContentL>
      </Layout>
    </Layout>)
  }
}
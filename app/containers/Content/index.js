import React from 'react';
// import { Switch, Route } from 'react-router-dom';

import Slider from 'components/Slider';
import Articles from 'containers/Articles';
import MainSider from 'containers/Sider';

import 'antd/dist/antd.css';

import { Layout } from 'antd';

const { Content, Sider } = Layout;

function MainContent() {
  return (
    <Layout>
      <Slider />
      <Layout>
        <Content>
          <Articles />
        </Content>
        <Sider
          theme="light"
        >
          <MainSider />
        </Sider>
      </Layout>
    </Layout>
  )
}

export default MainContent;

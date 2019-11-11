/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import NotFoundPage from 'pages/NotFoundPage/Loadable';
import MainSider from 'containers/Sider';

import 'antd/dist/antd.css';

import { Layout } from 'antd';

const { Content, Sider } = Layout;

function MainContent() {
  return (
    <Layout>
      <Content>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </Content>
      <Sider
        theme="light"
      >
        <MainSider />
      </Sider>
    </Layout>
  )
}

export default MainContent;

/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Slider from 'components/Slider';
import ArticleList from 'containers/Articles';
import Article from 'containers/Article';
import NotFoundPage from 'pages/NotFoundPage/Loadable';
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
          <ArticleList />
          <Article />
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

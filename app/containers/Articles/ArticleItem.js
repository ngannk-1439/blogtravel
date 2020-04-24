/* eslint-disable */

import React from 'react';

import { Link } from 'react-router-dom';

import { Card, Row, Col } from 'antd';

import styled from 'styled-components';
import { colors } from '../../global-styles';

const ArticleListLayout = styled.div`
  padding: 30px;
`;

const StyledCardItem = styled(Card)`
  .ant-card-cover {
    height: 200px;
    overflow: hidden;
  }
`;

export default ({article}) => {
  return (
    <Col span={12}>
      <StyledCardItem 
        type="inner"
        cover={
          <img
            src={article.article_img}
          />}
      >
        <Link to={`/articles/${article.id}`} key={article.id}>{article.title}</Link>
        <h4></h4>
        <p>{article.created_at}</p>
        <p>{article.short_content}</p>
      </StyledCardItem>
    </Col>
  )
}

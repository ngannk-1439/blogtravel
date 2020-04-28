import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { Card, Col } from 'antd';

import styled from 'styled-components';

const StyledCardItem = styled(Card)`
  .ant-card-cover {
    height: 200px;
    overflow: hidden;
  }
`;


const ArticleItem = ({article}) => {
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

ArticleItem.propTypes = {
  article: PropTypes.object,
}

export default ArticleItem;

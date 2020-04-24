/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import useInjectReducer from 'utils/injectReducer';
import reducer from './reducer';

import useInjectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';
import saga from './saga';

import {
  makeSelectArticles,
  makeSelectArticlesLoading,
  makeSelectArticlesError
} from './selectors';

import ArticleItem from './ArticleItem';

import { Card, Row, Col } from 'antd';

import styled from 'styled-components';
import { colors } from '../../global-styles';

const ArticleListLayout = styled.div`
  padding: 30px;
`;

const key = 'ArticleList';

function ArticleList(props) {

  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});

  let articleListContent = <div />;
  const allArticles = Array.from(props.articles);

  if(allArticles) {
    articleListContent = allArticles.map(article => (
      <ArticleItem key={article.id} article={article} />
    ));
  } else {
    <div>No data</div>
  }

  console.log(props.articles);
  return (
    <ArticleListLayout>
      <Card title="Card title" extra={<a href="#">Xem thêm</a>}>
        <Row gutter={[16, 16]}>
          {articleListContent}
        </Row>
      </Card>
    </ArticleListLayout>
  )
}

const mapStateToProps = createStructuredSelector({
  articles: makeSelectArticles(),
  loading: makeSelectArticlesLoading(),
  error: makeSelectArticlesError()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

const withSaga = useInjectSaga({ key, saga, mode: DAEMON });

export default compose(
  withConnect,
  withSaga
)(ArticleList);

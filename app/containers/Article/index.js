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
  makeSelectArticle,
  makeSelectArticleLoading,
  makeSelectArticleError
} from './selectors';

const key = 'Article';

function Article(props) {
  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});

  // let articleContent = <div />;
  // const childArticle = Array.from(props.article);
  console.log(props.article);

  const { title, content } = props.article;
  return (
    <div>
      <p>{title}</p>
      <p>{content}</p>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  article: makeSelectArticle(),
  loading: makeSelectArticleLoading(),
  error: makeSelectArticleError()
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
)(Article);

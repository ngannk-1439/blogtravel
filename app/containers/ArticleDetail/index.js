/* eslint-disable no-unused-vars */
import React from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import useInjectReducer from 'utils/injectReducer';
import reducer from './reducer';

import useInjectSaga from 'utils/injectSaga';
import { DAEMON } from 'utils/constants';
import saga from './saga';

const key = 'ArticleDetail';

const ArticleDetail = ({ match }) => {

  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});

  return (
    <div>This is Article Detail with id {match.params.id}</div>
  )
}

const withSaga = useInjectSaga({ key, saga, mode: DAEMON });

// function ArticleDetail() {
//   return (
//     <div>This is Article Detail</div>
//   )
// }

export default compose(withSaga)(ArticleDetail);

/*
 *
 * ArticleDetail saga
 *
 */

 /* eslint-disable */
import { call, put, all, takeEvery } from 'redux-saga/effects';

import { FETCH_ARTICLE_DETAIL, FETCH_ARTICLE_DETAIL_SUCCESS } from './constants';

import { loadArticleDetail, loadArticleDetailSuccess, articleDetailLoadingError } from './actions';

import request from 'utils/request';

function* fetchArticleDetail(id) {

  const articleDetailUrl = `https://qohzq.sse.codesandbox.io/articles/${id}`;
  try {
    const article = yield call(request, articleDetailUrl, id);
    yield put(loadArticleDetailSuccess(article));
  } catch(error) {
    yield put(articleDetailLoadingError(error));
  }

  console.log(id);
}

// function* fetchArticleDetail(id) {
//   console.log('load adfsfdsfdsfdsf');
//   const articleDetailUrl = `https://qohzq.sse.codesandbox.io/articles/${id}`;
//   try {
//     const article = yield call(request, articleDetailUrl);
//     yield put ({ type: FETCH_ARTICLE_DETAIL_SUCCESS, article, id });
//   } catch(error) {
//     yield put(articleDetailLoadingError(error));
//   }
// }

function* actionArticleDetailWatcher() {
  yield takeEvery(FETCH_ARTICLE_DETAIL, fetchArticleDetail);
}

export default function* rootSaga() {
  yield all([
    fetchArticleDetail(),
    actionArticleDetailWatcher()
  ])
}

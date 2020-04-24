/*
 *
 * Article saga
 *
 */

/* eslint-disable */
import { call, put, all, takeEvery } from 'redux-saga/effects';
import { FETCH_ARTICLE, FETCH_ARTICLE_SUCCESS } from './constants';

import { loadArticle, articleLoadingError } from './actions';

import request from 'utils/request';


function* fetchArticle({ id }) {
  console.log('omg');
  const articleUrl = `https://qohzq.sse.codesandbox.io/articles/${article.id}`;
  try {
    const article = yield call(request, articleUrl, id);
    yield put ({ type: FETCH_ARTICLE_SUCCESS, article, id });
  } catch(error) {
    yield put(articleLoadingError(error));
  }
}

function* actionArticleWatcher() {
  yield takeEvery(FETCH_ARTICLE, fetchArticle);
}

export default function* rootSaga() {
  yield all([
    fetchArticle(),
    actionArticleWatcher()
  ])
}

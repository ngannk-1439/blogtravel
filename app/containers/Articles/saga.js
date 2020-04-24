/*
*
* ArticleList saga
*
*/

/* eslint-disable */
import { call, put, all, takeEvery } from 'redux-saga/effects';
// import { router, createBrowserHistory } from 'redux-saga-router';
import { FETCH_ARTICLES, FETCH_ARTICLES_SUCCESS, articlesApi } from './constants';

import { loadArticles, articlesLoadingError } from './actions';

import request from 'utils/request';

function* fetchArticles() {
  console.log('loaded articles');
  try {
    const articles = yield call(request, articlesApi);
    yield put ({ type: FETCH_ARTICLES_SUCCESS, articles });
  } catch (error) {
    yield put(articlesLoadingError(error));
  }
}

function* actionArticlesWatcher() {
  yield takeEvery(FETCH_ARTICLES, fetchArticles);
}

export default function* rootSaga() {
  yield all([
    fetchArticles(),
    actionArticlesWatcher()
  ])
}

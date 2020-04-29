/*
 *
 * ArticleList actions
 *
 */

import { FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE } from './constants';

export function loadArticles(articles) {
  return {
    type: FETCH_ARTICLES_SUCCESS,
    articles
  }
}

export function articlesLoadingError(error) {
  return {
    type: FETCH_ARTICLES_FAILURE,
    error
  }
}

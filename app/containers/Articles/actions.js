/*
 *
 * ArticleList actions
 *
 */

import { FETCH_ARTICLES, FETCH_ARTICLES_FAILURE } from './constants';

export function loadArticles(articles) {
  return {
    type: FETCH_ARTICLES,
    articles
  }
}

export function articlesLoadingError(error) {
  return {
    type: FETCH_ARTICLES_FAILURE,
    error
  }
}

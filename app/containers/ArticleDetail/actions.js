/*
 *
 * ArticleDetail actions
 *
 */

import { FETCH_ARTICLE_DETAIL, FETCH_ARTICLE_DETAIL_SUCCESS, FETCH_ARTICLE_DETAIL_FAILURE } from './constants';

export function loadArticleDetail(id) {
  return {
    type: FETCH_ARTICLE_DETAIL,
    id
  }
}

export function loadArticleDetailSuccess(article) {
  return {
    type: FETCH_ARTICLE_DETAIL_SUCCESS,
    article
  }
}

export function articleDetailLoadingError(error) {
  return {
    type: FETCH_ARTICLE_DETAIL_FAILURE,
    error
  }
}

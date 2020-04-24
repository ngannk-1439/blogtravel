/*
 *
 * Article actions
 *
 */

import { FETCH_ARTICLE, FETCH_ARTICLE_FAILURE } from './constants';

export function loadArticle(id) {
  return {
    type: FETCH_ARTICLE,
    id
  }
}

export function articleLoadingError(error) {
  return {
    type: FETCH_ARTICLE_FAILURE,
    error
  }
}

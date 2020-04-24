/*
 *
 * ArticleList reducer
 *
 */

import produce from 'immer';
import { FETCH_ARTICLES, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE } from './constants';

export const initialState = {
  loading: false,
  error: false,
  articles: false
}

const articlesReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_ARTICLES:
        draft.loading = true;
        draft.error = false;
        draft.articles = false;
        break;
      case FETCH_ARTICLES_SUCCESS:
        draft.articles = action.articles;
        draft.loading = false;
        break;
      case FETCH_ARTICLES_FAILURE:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  })

export default articlesReducer;

/*
 *
 * Article reducer
 *
 */

import produce from 'immer';
import { FETCH_ARTICLE, FETCH_ARTICLE_SUCCESS, FETCH_ARTICLE_FAILURE } from './constants';

export const initialState = {
  loading: false,
  error: false,
  article: false
}

const articleReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_ARTICLE:
        draft.loading = true;
        draft.error = false;
        draft.article = false;
        break;
      case FETCH_ARTICLE_SUCCESS:
        draft.article = action.id;
        draft.loading =false;
        break;
      case FETCH_ARTICLE_FAILURE:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  })

export default articleReducer;

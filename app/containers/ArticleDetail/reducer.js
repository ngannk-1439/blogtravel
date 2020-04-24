/*
 *
 * ArticleDetail reducer
 *
 */

import produce from 'immer';
import { FETCH_ARTICLE_DETAIL, FETCH_ARTICLE_DETAIL_SUCCESS, FETCH_ARTICLE_DETAIL_FAILURE } from './constants';
// import { filter } from 'minimatch';

export const initialState = {
  loading: false,
  error: false,
  article: false,
  id: false
}

const articleDetailReducer = (state = initialState, action) => 
  produce(state, draft => {
    switch (action.type) {
      case FETCH_ARTICLE_DETAIL:
        draft.loading = true;
        draft.error = false;
        draft.id = false;
        break;
      case FETCH_ARTICLE_DETAIL_SUCCESS:
        draft.id = action.article.id;
        // filter(() => action.article.get('id') !== action.articleId);
        draft.loading = false;
        break;
      case FETCH_ARTICLE_DETAIL_FAILURE:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  })

export default articleDetailReducer;

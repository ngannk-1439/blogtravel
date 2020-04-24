/*
 *
 * Article selectors
 *
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectArticle = state => state.article || initialState;

const makeSelectArticle = () =>
  createSelector(
    selectArticle,
    articleState => articleState.article
  )

const makeSelectArticleLoading = () =>
  createSelector(
    selectArticle,
    articleState => articleState.loading,
  )

const makeSelectArticleError = () =>
  createSelector(
    selectArticle,
    articleState => articleState.error,
  )

export {
  makeSelectArticle,
  makeSelectArticleLoading,
  makeSelectArticleError
}

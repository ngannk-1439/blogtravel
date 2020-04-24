import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectArticles = state => state.articles || initialState;

const makeSelectArticles = () =>
  createSelector(
    selectArticles,
    articlesState => articlesState.articles
  )

const makeSelectArticlesLoading = () =>
  createSelector(
    selectArticles,
    articlesState => articlesState.loading,
  )

const makeSelectArticlesError = () =>
  createSelector(
    selectArticles,
    articlesState => articlesState.error,
  )

export {
  makeSelectArticles,
  makeSelectArticlesLoading,
  makeSelectArticlesError
}

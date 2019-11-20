import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCountry = state => state.countries || initialState;

const makeSelectCountry = () =>
  createSelector(
    selectCountry,
    countryState => countryState.countries
  )

const makeSelectCountriesLoading = () => 
  createSelector(
    selectCountry,
    countryState => countryState.loading,
  )

const makeSelectCountriesError = () =>
  createSelector(
    selectCountry,
    countryState => countryState.error,
  )

export { selectCountry, makeSelectCountry, makeSelectCountriesLoading, makeSelectCountriesError };

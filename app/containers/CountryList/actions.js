/*
 *
 * CountryList actions
 *
 */

import { FETCH_COUNTRY_FAILURE, FETCH_COUNTRY_SUCCESS } from './constants';

export function loadCountries(countries) {
  return {
    type: FETCH_COUNTRY_SUCCESS,
    countries
  }
}

export function countriesLoadingError(error) {
  return {
    type: FETCH_COUNTRY_FAILURE,
    error
  }
}

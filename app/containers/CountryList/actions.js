/*
 *
 * CountryList actions
 *
 */

import { FETCH_COUNTRY, FETCH_COUNTRY_FAILURE } from './constants';

export function loadCountries(countries) {
  return {
    type: FETCH_COUNTRY,
    countries
  }
}

export function countriesLoadingError(error) {
  return {
    type: FETCH_COUNTRY_FAILURE,
    error
  }
}

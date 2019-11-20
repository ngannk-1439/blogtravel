/*
 *
 * CountryList reducer
 *
 */

import produce from 'immer';
import { FETCH_COUNTRY, FETCH_COUNTRY_SUCCESS, FETCH_COUNTRY_FAILURE } from './constants';

export const initialState = {
  loading: false,
  error: false,
  countries: false
}

const countryReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_COUNTRY:
        draft.loading = true;
        draft.erro = false;
        draft.countries = false;
        break;
      case FETCH_COUNTRY_SUCCESS:
        draft.countries = action.countries;
        draft.loading = false;
        break;
      case FETCH_COUNTRY_FAILURE:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  })

export default countryReducer;

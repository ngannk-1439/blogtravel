/*
 *
 * CountryList saga
 *
 */

/* eslint-disable */
import { call, put, all, select, takeLastest, takeEvery } from 'redux-saga/effects';
import { FETCH_COUNTRY, FETCH_COUNTRY_SUCCESS } from './constants';

import { loadCountries, countriesLoadingError } from './actions';
import request from 'utils/request';

function* fetchCountry() {
  console.log('loaded');
  const requestUrl = 'https://qohzq.sse.codesandbox.io/countries';
  try {
    const countries = yield call(request, requestUrl);
    yield put({ type: FETCH_COUNTRY_SUCCESS, countries });
  } catch (err) {
    yield put(countriesLoadingError(err));
  }
}

function* actionWatcher() {
  yield takeEvery(FETCH_COUNTRY, fetchCountry);
}

export default function* rootSaga() {
  yield all([
    fetchCountry(),
    actionWatcher(),
  ]);
}

/*
 *
 * CountryList saga
 *
 */

import { call, put, all, takeEvery } from 'redux-saga/effects';
import { countriesApi, FETCH_COUNTRY } from './constants';

import { loadCountries, countriesLoadingError } from './actions';
import request from 'utils/request';

function* fetchCountry() {
  try {
    const countries = yield call(request, countriesApi);
    yield put(loadCountries(countries));
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

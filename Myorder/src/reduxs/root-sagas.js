import { all } from 'redux-saga/effects';
import authSagas from './auth/sagas'
import addressSagas from './address/sagas'

export default function* rootSaga() {
  yield all([
    authSagas(),
    addressSagas()
  ]);
} 
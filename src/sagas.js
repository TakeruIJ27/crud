import { all } from 'redux-saga/effects';

// Place your sagas below...
import authWatcher from './containers/auth/sagas';

export default function* rootSaga() {
  yield all([
    authWatcher(),
  ]);
}

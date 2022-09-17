import { all, fork } from 'redux-saga/effects';
import fetchClubsSaga from '../../features/clubs/clubsSaga';
import fetchLoginSaga from '../../features/login/loginSaga';

export function* rootSaga() {
    yield all([fork(fetchClubsSaga), fork(fetchLoginSaga)]);
}

import { all, fork } from 'redux-saga/effects';
import fetchClubsSaga from '../../features/clubs/clubsSaga';

export function* rootSaga() {
    yield all([fork(fetchClubsSaga)]);
}

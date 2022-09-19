import { all, fork } from 'redux-saga/effects';
import watchUserSaga from '../../features/login/loginSaga';

export function* rootSaga() {
    yield all([fork(watchUserSaga)]);
}

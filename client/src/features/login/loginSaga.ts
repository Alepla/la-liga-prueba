import { call, takeEvery, put, CallEffect, PutEffect, SelectEffect } from 'redux-saga/effects';
import { AnyAction, PayloadAction } from '@reduxjs/toolkit';
import { loginUserSuccess, loginUserError } from './loginSlice';
import { authenticate } from './loginService';
import { setTokens } from '../../app/services/localStorage';
import { history } from '../../helpers/history';
import { AuthResponse, AuthCredentials } from './loginTypes';

type Resp = {
    token: string;
    error: {
        status: null;
        message: '';
    };
};

function* fetchLoginSaga(action: PayloadAction<AuthCredentials>): Generator<CallEffect<Resp> | PutEffect<AnyAction>, void, Resp> {
    const { payload } = action;
    const res = yield call(authenticate, payload);
    if (res.token) {
        yield put(loginUserSuccess(res.token));
        setTokens(res.token);
        history.push('/clubs');
    } else {
        console.log(res);
        yield put(loginUserError(res));
    }
}

export default function* watchUserSaga() {
    yield takeEvery('login/loginUserFetch', fetchLoginSaga);
}

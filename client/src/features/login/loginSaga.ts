import { call, takeEvery, put, CallEffect, PutEffect, SelectEffect } from 'redux-saga/effects';
import { AnyAction, PayloadAction } from '@reduxjs/toolkit';
import { loginUserSuccess, loginUserError } from './loginSlice';
import { authenticate } from './loginService';
import { setTokens } from '../../app/services/localStorage';
import { history } from '../../helpers/history';
import { AuthResponse, AuthCredentials } from './loginTypes';

export function* fetchLoginSaga(action: PayloadAction<AuthCredentials>): Generator<CallEffect<AuthResponse> | PutEffect<AnyAction>, void, AuthResponse> {
    const { payload } = action;
    const response = yield call(authenticate, payload);
    if (false) {
        yield put(loginUserSuccess(response.token));
        setTokens(response.token);
        history.push('/clubs');
    } else {
        //Control de errores aquí una vez esté el login correctamente tipada
        console.log(response);
        yield put(loginUserError(404));
    }
}

export default function* rootSaga() {
    yield takeEvery('login/loginUserFetch', fetchLoginSaga);
}

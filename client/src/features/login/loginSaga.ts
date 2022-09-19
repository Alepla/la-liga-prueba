import { call, takeEvery, put, CallEffect, PutEffect } from 'redux-saga/effects';
import { AnyAction, PayloadAction } from '@reduxjs/toolkit';
import { loginUserSuccess, loginUserError } from './loginSlice';
import { authenticate } from './loginService';
import { setTokens } from '../../app/services/localStorage';
import { history } from '../../helpers/history';
import { AuthResponse, AuthCredentials } from './loginTypes';

/**
 *
 * @param action
 * Redux-Saga middleware which receives the user's credentials and it executes the put that goes to the service and takes
 * care of it to call the API to check if they are correct.
 */
function* fetchLoginSaga(action: PayloadAction<AuthCredentials>): Generator<CallEffect<AuthResponse> | PutEffect<AnyAction>, void, AuthResponse> {
    const { payload } = action;
    /**
     * You can get the token of having logged in successfully or a message and a status otherwise.
     */
    const { token, status, message } = yield call(authenticate, payload);
    if (token) {
        /**
         * If a token has arrived, we execute login User Success which saves the token in redux, later we save it in localstorage and then we do a redirect to /clubs.
         */
        yield put(loginUserSuccess(token));
        setTokens(token);
        history.push('/clubs');
    } else {
        /**
         * If we do not have a token, we execute logonUser Error which saves the following parameters in redux to later rescue them and display them in a toastr.
         */
        yield put(loginUserError({ status, message }));
    }
}

/**
 * We export the function to import in the Saga root file and this at the same time in the store to be able to use it.
 */
export default function* watchUserSaga() {
    yield takeEvery('login/loginUserFetch', fetchLoginSaga);
}

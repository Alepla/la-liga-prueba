import { call, takeEvery, put, CallEffect, PutEffect, select, SelectEffect } from 'redux-saga/effects';
import { AnyAction, PayloadAction } from '@reduxjs/toolkit';
import { getClubsSuccess, getClubsError } from './clubsSlice';
import { ClubHeaders, ClubsParams } from './clubsTypes';
import { getClubs } from './clubsService';

export function* fetchClubsSaga(action: PayloadAction<ClubsParams>): Generator<CallEffect<any> | PutEffect<AnyAction> | SelectEffect, void, ClubHeaders> {
    const { payload } = action;
    const state = yield select();
    const config = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${state.login.accessToken}`,
        },
    };
    try {
        const data = yield call(getClubs, payload, config.headers);
        yield put(getClubsSuccess(data));
    } catch (e) {
        yield put(getClubsError);
    }
}

export default function* rootSaga() {
    yield takeEvery('clubs/getClubsFetch', fetchClubsSaga);
}

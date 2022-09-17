import { call, takeEvery, put, CallEffect, PutEffect, select, SelectEffect } from 'redux-saga/effects';
import { AnyAction } from '@reduxjs/toolkit';
import { getClubsSuccess, getClubsError } from './clubsSlice';
import { ClubHeaders } from './clubsTypes';
import { RootState } from '../../app/store';

export function* fetchClubsSaga(): Generator<CallEffect<ClubHeaders> | PutEffect<AnyAction> | SelectEffect, void, ClubHeaders> {
    const state = yield select();
    const config = {
        headers: {
            Authorization: `Bearer ${state.login.accessToken}`,
        },
    };
    console.log(config);
    try {
        //const data = yield call();
        //yield put(getClubsSuccess(data));
    } catch (e) {
        yield put(getClubsError);
    }
}

export default function* rootSaga() {
    yield takeEvery('clubs/getClubsFetch', fetchClubsSaga);
}

import { call, takeEvery, put, CallEffect, PutEffect } from 'redux-saga/effects';
import { AnyAction } from '@reduxjs/toolkit';
import { getClubsSuccess, getClubsError } from './clubsSlice';
import { Clubs } from './clubsTypes';

export function* fetchClubsSaga(): Generator<CallEffect<Clubs> | PutEffect<AnyAction>, void, Clubs> {
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

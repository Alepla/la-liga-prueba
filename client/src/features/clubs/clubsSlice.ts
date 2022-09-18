import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { ClubsItems } from './clubsTypes';

export type Clubs = {
    isProcessingRequest: boolean;
    clubs: ClubsItems[];
    total: number;
};

const initialState: Clubs = {
    isProcessingRequest: false,
    clubs: [],
    total: 0,
};

export const clubsSlice = createSlice({
    name: 'clubs',
    initialState,
    reducers: {
        getClubsFetch: (state, action: PayloadAction<any>) => {
            return {
                ...state,
                isProcessingRequest: true,
            };
        },
        getClubsSuccess: (state, action: PayloadAction<any>) => {
            return {
                ...state,
                clubs: action.payload.results,
                total: action.payload.total,
                isProcessingRequest: false,
            };
        },
        getClubsError: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                isProcessingRequest: false,
            };
        },
    },
});

export const { getClubsFetch, getClubsSuccess, getClubsError } = clubsSlice.actions;
export const selectClubs = (state: RootState) => state.clubs;
export const clubsReducer = clubsSlice.reducer;

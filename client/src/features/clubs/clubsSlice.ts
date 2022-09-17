import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type Clubs = {
    isProcessingRequest: boolean;
    clubs: [];
};

const initialState: Clubs = {
    isProcessingRequest: false,
    clubs: [],
};

export const clubsSlice = createSlice({
    name: 'clubs',
    initialState,
    reducers: {
        getClubsFetch: (state) => {
            return {
                ...state,
                isProcessingRequest: true,
            };
        },
        getClubsSuccess: (state, action: PayloadAction<any>) => {
            return {
                ...state,
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

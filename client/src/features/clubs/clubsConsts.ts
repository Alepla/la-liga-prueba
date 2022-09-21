import { ClubsParams, ClubsResponse } from './clubsTypes';

export const CLUBS_SEARCH_DEFAULT_PARAMS: ClubsParams = {
    offset: 0,
    limit: 6,
    name_like: '',
    favorite: false,
};

export const CLUBS_DEFAULT_RESPONSE: ClubsResponse = {
    results: [],
    total: 0,
};

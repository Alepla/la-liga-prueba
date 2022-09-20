import { ClubUpdateParams, ClubsParams, ClubsResponse, ClubsItems } from './clubsTypes';
import { superFetch } from '../../app/utils/superFetch';
import { memoize } from '../../app/middlewares/memoize';

/**
 *
 * @param data
 * @returns Returns the list of user's favorite clubs.
 */
export const getFavClubs = async (data: ClubsParams): Promise<ClubsResponse> => {
    const { offset, limit, name_like, favorite } = data;
    const fav = favorite ? `&favorite=${favorite}` : ``;
    const params = {
        url: `api/clubs?offset=${offset}&limit=${limit}&name_like=${name_like}${fav}`,
        method: 'get',
    };
    return await superFetch(params);
};

/**
 * Cache function to save the list of user clubs.
 */
export const getClubsMemoize = memoize(async (offset: number, limit: number, name_like: string): Promise<ClubsResponse> => {
    const params = {
        url: `api/clubs?offset=${offset}&limit=${limit}&name_like=${name_like}`,
        method: 'get',
    };
    return await superFetch(params);
});

/**
 *
 * @param data
 * @returns Function in charge of updating a club, adding it to favorites.
 */
export const updateClub = async (data: ClubUpdateParams): Promise<ClubsItems> => {
    const { favorite, clubID } = data;
    const body = JSON.stringify({ favorite });
    const params = {
        url: `api/clubs/${clubID}`,
        method: 'PATCH',
        body,
    };
    return await superFetch(params);
};

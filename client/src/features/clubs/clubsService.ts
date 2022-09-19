import { env_var } from '../../config/env';
import { get, patch } from '../../app/services/apiService';
import { ClubsParams } from './clubsTypes';
import { AuthInterceptor } from '../../app/middlewares/authInterceptor';

export const getClubs = async (params: ClubsParams) => {
    const { offset, limit, name_like, favorite } = params;
    let fav = '';
    if (favorite) fav = `&favorite=${favorite}`;
    AuthInterceptor();
    return await get(env_var.BASE_URL + `api/clubs?offset=${offset}&limit=${limit}&name_like=${name_like}${fav}`);
};

export const updateClub = async (params: any) => {
    const { favorite, clubID } = params;
    const body = JSON.stringify({ favorite });
    AuthInterceptor();
    return await patch(env_var.BASE_URL + `api/clubs/${clubID}`, body);
};

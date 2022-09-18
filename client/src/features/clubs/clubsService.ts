import { env_var } from '../../config/env';
import { get } from '../../app/services/apiService';
import { Headers } from '../../app/types/apiParamsTypes';
import { ClubsParams } from './clubsTypes';

export const getClubs = async (params: ClubsParams, headers: Headers) => {
    const { offset, limit, name_like, favorite } = params;
    return await get(env_var.BASE_URL + `api/clubs?offset=${offset}&limit=${limit}&name_like=${name_like}&favorite=${favorite}`, headers);
};

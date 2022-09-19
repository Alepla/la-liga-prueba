import { env_var } from '../../config/env';
import { ClubUpdateParams, ClubsParams } from './clubsTypes';
import { AuthInterceptor } from '../../app/middlewares/authInterceptor';
import { handleResponse } from '../../app/services/apiService';
import { memoize } from '../../app/middlewares/memoize';

/**
 *
 * @param params
 * @returns devuelve el listado de clubs favoritos del usuario.
 */
export const getFavClubs = async (params: ClubsParams) => {
    const { offset, limit, name_like, favorite } = params;
    const fav = favorite ? `&favorite=${favorite}` : ``;
    const url = env_var.BASE_URL + `api/clubs?offset=${offset}&limit=${limit}&name_like=${name_like}${fav}`;
    AuthInterceptor();
    return await fetch(url, { method: 'get' })
        .then((response) => {
            return handleResponse(response);
        })
        .catch((error) => {
            return error;
        });
};

/**
 * Función cacheada para guardar el listado de clubs del usuario.
 */
export const getClubsMemoize = memoize(async (offset: number, limit: number, name_like: string) => {
    const url = env_var.BASE_URL + `api/clubs?offset=${offset}&limit=${limit}&name_like=${name_like}`;
    AuthInterceptor();
    return await fetch(url, { method: 'get' })
        .then((response) => {
            return handleResponse(response);
        })
        .catch((error) => {
            return error;
        });
});

/**
 *
 * @param params
 * @returns Función encargada de actualizar un club, añadiendolo a favoritos.
 */
export const updateClub = async (params: ClubUpdateParams) => {
    const { favorite, clubID } = params;
    const body = JSON.stringify({ favorite });
    const url = env_var.BASE_URL + `api/clubs/${clubID}`;
    AuthInterceptor();
    return await fetch(url, { method: 'PATCH', body })
        .then((response) => {
            return handleResponse(response);
        })
        .catch((error) => {
            return error;
        });
};

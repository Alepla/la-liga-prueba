import { ClubsItems, ClubsResponse } from '../../clubsTypes';
/**
 *
 * @param clubUpdated
 * @param clubsResponse
 *
 */
export const formatClubsUpdateCheck = (clubUpdated: ClubsItems, clubsResponse: ClubsItems[]): ClubsItems[] => {
    return clubsResponse.map((club: ClubsItems): ClubsItems => {
        if (club.id === clubUpdated.id) {
            club.favorite = clubUpdated.favorite;
            return club;
        }
        return club;
    });
};

/**
 *
 * @param clubUpdated
 * @param clubsResponse
 *
 */
export const formatClubsDeleteFromFavs = (clubUpdated: ClubsItems, clubsResponse: ClubsResponse): ClubsResponse => {
    let { results, total } = clubsResponse;
    results.map((club: ClubsItems, index: number): void => {
        if (club.id === clubUpdated.id) results.splice(index, 1);
    });
    total = total - 1;
    return { results, total };
};

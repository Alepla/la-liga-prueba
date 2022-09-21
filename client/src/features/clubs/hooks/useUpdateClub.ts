import { ClubsItems, ClubsResponse, UseUpdateClubProps, UseUpdateClubReturnType } from '../clubsTypes';
import { formatClubsDeleteFromFavs, formatClubsUpdateCheck } from '../utils/formatClubs';

export const useUpdateClub = (props: UseUpdateClubProps): UseUpdateClubReturnType => {
    const { searchValues, clubsResponse, setClubsResponse } = props;
    /**
     *
     * @param clubUpdated
     * Function that receives by props the child component of the list the modifications of any of the clubs and calls formatClubs utility.
     */
    const onUpdateClub = (clubUpdated: ClubsItems): void => {
        const { favorite } = searchValues;
        if (favorite) {
            const { results, total }: ClubsResponse = formatClubsDeleteFromFavs(clubUpdated, clubsResponse);
            setClubsResponse({ ...clubsResponse, results, total });
        } else {
            const clubs: ClubsItems[] = formatClubsUpdateCheck(clubUpdated, clubsResponse);
            setClubsResponse({ ...clubsResponse, results: clubs });
        }
    };

    return { onUpdateClub } as const;
};

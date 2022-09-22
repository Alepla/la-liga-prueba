import { useToast } from '@chakra-ui/react';
import { showResponseMessage } from '../../../../app/utils/responseHandler/responseHandler';
import { updateClub } from '../../clubsService';
import { ClubsItems, ClubsResponse } from '../../clubsTypes';
import { formatClubsDeleteFromFavs, formatClubsUpdateCheck } from '../../utils/formatClubs';
import { UseUpdateClubProps, UseUpdateClubReturnType } from './useUpdateClubTypes';

export const useUpdateClub = (props: UseUpdateClubProps): UseUpdateClubReturnType => {
    const { favorite, clubsResponse, setClubsResponse } = props;
    const toast = useToast();
    /**
     *
     * @param clubUpdated
     * Function that receives by props the child component of the list the modifications of any of the clubs and calls formatClubs utility.
     */
    const onUpdateClub = (clubID: string, isFavorite: boolean): void => {
        const body = {
            favorite: !isFavorite,
            clubID,
        };
        updateClub(body).then((clubUpdated: ClubsItems): void => {
            if (clubUpdated.id) showToast();
            if (favorite) {
                const { results, total }: ClubsResponse = formatClubsDeleteFromFavs(clubUpdated, clubsResponse);
                setClubsResponse({ ...clubsResponse, results, total });
            } else {
                const clubs: ClubsItems[] = formatClubsUpdateCheck(clubUpdated, clubsResponse);
                setClubsResponse({ ...clubsResponse, results: clubs });
            }
        });
    };

    const showToast = () => {
        const { type, resMessage } = showResponseMessage({ status: 200, message: 'Saved correctly' });
        toast({
            title: resMessage,
            status: type,
            duration: 9000,
            isClosable: true,
            position: 'bottom-left',
        });
    };

    return { onUpdateClub } as const;
};

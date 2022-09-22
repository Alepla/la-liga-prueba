import { useToast } from '@chakra-ui/react';
import { showResponseMessage } from '../../../../app/utils/responseHandler/responseHandler';
import { updateClub } from '../../clubsService';
import { ClubsItems, ClubsResponse } from '../../clubsTypes';
import { formatClubsDeleteFromFavs, formatClubsUpdateCheck } from '../../utils/formatClubs/formatClubs';
import { UseUpdateClubProps, UseUpdateClubReturnType } from './useUpdateClubTypes';

export const useUpdateClub = (props: UseUpdateClubProps): UseUpdateClubReturnType => {
    const { favorite, clubsResponse, setClubsResponse } = props;
    const toast = useToast();
    /**
     *
     * @param clubID
     * @param isFavorite
     * Function that receives the id of the club and the status of favorite.
     */
    const onUpdateClub = (clubID: string, isFavorite: boolean): void => {
        const body = {
            favorite: !isFavorite,
            clubID,
        };
        /**
         * The service in charge of updating the club is called.
         */
        updateClub(body).then((clubUpdated: ClubsItems): void => {
            if (clubUpdated.id) showToast();
            /**
             * Si el filtros de favoritos esta activado se hace elimina del array de clubs en caso contrario solo se actualiza el valor de favorito.
             */
            if (favorite) {
                const { results, total }: ClubsResponse = formatClubsDeleteFromFavs(clubUpdated, clubsResponse);
                setClubsResponse({ ...clubsResponse, results, total });
            } else {
                const clubs: ClubsItems[] = formatClubsUpdateCheck(clubUpdated, clubsResponse.results);
                setClubsResponse({ ...clubsResponse, results: clubs });
            }
        });
    };
    /**
     * Shows a toast with a 200 message indicating the user has been successfully updated.
     */
    const showToast = (): void => {
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

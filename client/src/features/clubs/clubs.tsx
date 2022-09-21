import React, { useEffect, useState } from 'react';
import { getClubsMemoize, getFavClubs } from './clubsService';
import { Pagination } from '../../app/components/pagination/pagination';
import { ClubsList } from './clubsList/clubsList';
import { Box, Button, Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { CLUBS_SEARCH_DEFAULT_PARAMS, CLUBS_DEFAULT_RESPONSE } from './clubsConsts';
import { useSetSearchValues } from './hooks/useSetSearchValues';
import { ClubsItems, ClubsResponse } from './clubsTypes';
import { Search2Icon, StarIcon } from '@chakra-ui/icons';

export const Clubs = (): JSX.Element => {
    /**
     * Utilizamos defaultPage para indicarle una página por defecto al componente de la paginación
     */
    const [defaultPage, setDefaultPage] = useState<number>(0);
    /**
     * clubsResponse es la respuesta de la llamada get a la api de /clubs
     */
    const [clubsResponse, setClubsResponse] = useState<ClubsResponse>(CLUBS_DEFAULT_RESPONSE);
    /**
     * Custom hook que utilizamos para controlar el estado de cada filtro del listado de clubs
     */
    const { callbackPagination, handleFieldChange, handleChangeFavorite, searchValues } = useSetSearchValues(CLUBS_SEARCH_DEFAULT_PARAMS);

    /**
     * Hook que se triggerea cada vez que se modifique algún parametro que pueda modificar la consulta de /clubs,
     * volviendola ha hacer. En caso de que el filtro de favoritos esté activo se hace sin caché, en caso contrario se
     * utiliza el servicio de memoize para guardar en caché
     */
    useEffect(() => {
        const { offset, limit, name_like, favorite } = searchValues;
        if (favorite) {
            getFavClubs({ offset, limit, name_like, favorite }).then((res: ClubsResponse): void => {
                setClubsResponse(res);
            });
        } else {
            getClubsMemoize(offset, limit, name_like).then((res: ClubsResponse): void => {
                setClubsResponse(res);
            });
        }
    }, [searchValues, defaultPage]);

    /**
     * Función que se triggerea cada vez que se filtra por favoritos y setando defaultPage a 0
     */
    const onClickFavorites = (): void => {
        handleChangeFavorite();
        setDefaultPage(0);
    };

    /**
     *
     * @param clubUpdated
     * Función que recibe por props el componente hijo del listado las modificaciones de cualquiera de los clubs.
     * El funcionamiento es el siguiente, cogemos del estado los clubs, los mapeamos y buscamos el que tenga el mismo id que
     * el club modificado, para actualizarlo, creando un nuevo array actualizado y finalmente añadiendolo al estado.
     */
    const onUpdateClub = (clubUpdated: ClubsItems): void => {
        const { results } = clubsResponse;
        const clubs = results.map((club) => {
            if (club.id === clubUpdated.id) {
                club.favorite = clubUpdated.favorite;
                return club;
            }
            return club;
        });

        setClubsResponse({
            ...clubsResponse,
            results: clubs,
        });
    };

    return (
        <Box margin={'20px'}>
            <Box>
                <Flex justifyContent={'center'}>
                    <InputGroup maxWidth={['66%', '50%']}>
                        <InputLeftElement pointerEvents="none" children={<Search2Icon color="gray.300" />} />
                        <Input aria-label={'Search club input'} borderRadius={'none'} placeholder="Search" onChange={handleFieldChange} />
                    </InputGroup>
                    <Button aria-label={'Favorites filter button'} onClick={onClickFavorites} borderRadius={'none'}>
                        <StarIcon color="#ECC94B" />
                    </Button>
                </Flex>
            </Box>
            <ClubsList onUpdateClub={onUpdateClub} clubs={clubsResponse.results}></ClubsList>
            <Flex justifyContent={'center'}>
                <Pagination onClick={callbackPagination} totalPages={Math.ceil(clubsResponse.total / 6)}></Pagination>
            </Flex>
        </Box>
    );
};

import React, { useState } from 'react';
import { ClubsParams } from '../clubsTypes';

/**
 *
 * @param initialState
 * @returns Custom hook para controlar el estado de los filtros de los clubs
 */
export const useSetSearchValues = (initialState: ClubsParams) => {
    const [searchValues, setSearchValues] = useState<ClubsParams>(initialState);
    /**
     *
     * @param offset
     * Función que actualiza el offset para la paginación
     */
    const callbackPagination = (offset: number): void => {
        setSearchValues({
            ...searchValues,
            offset: offset,
        });
    };

    /**
     *
     * @param event
     * Se ejecuta cada vez que el usuario introduce algún carácter en el filtro debounce.
     */
    const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchValues({
            ...searchValues,
            name_like: event.target.value,
        });
    };

    /**
     * Función que es activado por el botón de favortios.
     */
    const handleChangeFavorite = (): void => {
        setSearchValues({
            ...searchValues,
            offset: 0,
            limit: !searchValues.favorite ? 10 : 6,
            favorite: !searchValues.favorite,
        });
    };
    return [callbackPagination, handleFieldChange, handleChangeFavorite, searchValues] as const;
};

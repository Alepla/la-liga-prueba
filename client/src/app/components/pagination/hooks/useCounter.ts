import React, { useState } from 'react';

/**
 *
 * @param totalPages
 * @returns Custom hook in charge of adding or subtracting pages.
 */
export const useCounter = (totalPages: number) => {
    const [page, setPage] = useState<number>(0);
    const [numberOfPages, setNumberOfPages] = useState<number>(totalPages);

    /**
     * Conditional to know if the number of pages should be reset.
     */
    if (numberOfPages !== totalPages) {
        setPage(0);
        setNumberOfPages(totalPages);
    }

    const restPage = () => {
        setPage((prev) => prev - 1);
    };

    const plusPage = () => {
        setPage((prev) => prev + 1);
    };

    return [restPage, plusPage, page] as const;
};

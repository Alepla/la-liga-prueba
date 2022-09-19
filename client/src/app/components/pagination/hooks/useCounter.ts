import React, { useState } from 'react';

export const useCounter = (totalPages: number) => {
    const [page, setPage] = useState<number>(0);
    const [numberOfPages, setNumberOfPages] = useState<number>(totalPages);

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

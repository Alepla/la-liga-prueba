import React, { useEffect } from 'react';
import { Box, Button, HStack } from '@chakra-ui/react';
import { useCounter } from './hooks/useCounter';

export interface ChildProps {
    onClick: (offset: number) => void;
    totalPages: number;
}

export const Pagination = (props: ChildProps) => {
    const { onClick, totalPages } = props;
    const [restPage, plusPage, page] = useCounter(totalPages);

    useEffect(() => {
        onClick(page);
    }, [page]);

    return (
        <Box>
            <HStack spacing="14px">
                <Button onClick={restPage} disabled={page === 0}>
                    PREV
                </Button>
                <Button onClick={plusPage} disabled={page + 1 === totalPages || totalPages === 0}>
                    NEXT
                </Button>
                <Box>{`${page + 1} / ${totalPages == 0 ? 1 : totalPages}`}</Box>
            </HStack>
        </Box>
    );
};

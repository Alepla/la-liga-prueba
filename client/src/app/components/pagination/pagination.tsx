import React, { useEffect, useState } from 'react';
import { Box, Button, HStack } from '@chakra-ui/react';

export interface ChildProps {
    onClick: (offset: number) => void;
    total: number;
}

export const Pagination = (props: ChildProps) => {
    const [page, setPage] = useState(0);
    const totalPages = Math.ceil(props.total / 6);
    const onButtonPress = () => {
        props.onClick(page);
    };

    useEffect(() => {
        onButtonPress();
    }, [page]);

    return (
        <Box>
            <HStack spacing="14px">
                <Button onClick={() => setPage((prev) => prev - 1)} disabled={page === 0}>
                    PREV
                </Button>
                <Button onClick={() => setPage((prev) => prev + 1)} disabled={page + 1 === totalPages}>
                    NEXT
                </Button>
                <Box>{`${page + 1} / ${totalPages == 0 ? 1 : totalPages}`}</Box>
            </HStack>
        </Box>
    );
};

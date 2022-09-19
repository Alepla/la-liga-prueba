import React from 'react';
import { Box, Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';
import { showResponseMessage } from '../../services/responseHandler';
import { Error } from '../../types/errorControlTypes';

export const FeedbackControl = (error: Error) => {
    const { type, message } = showResponseMessage(error);

    return (
        <Box>
            {type === 'alert-danger' && (
                <Alert status="error">
                    <AlertIcon />
                    <AlertTitle>{message}</AlertTitle>
                </Alert>
            )}
            {type === 'alert-success' && (
                <Alert status="success">
                    <AlertIcon />
                    <AlertTitle>{message}</AlertTitle>
                </Alert>
            )}
        </Box>
    );
};

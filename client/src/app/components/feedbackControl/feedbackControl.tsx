import React from 'react';
import { Box, Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';
import { showResponseMessage } from '../../services/responseHandler';
import { Status } from '../../types/errorControlTypes';

export const FeedbackControl = (status: Status) => {
    const { type, message } = showResponseMessage(status);

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

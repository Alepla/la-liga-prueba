import React from 'react';
import { Box, Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';
import { showResponseMessage } from '../../services/responseHandler';

export const FeedbackControl = (status: any) => {
    const { type, message } = showResponseMessage(status.status);

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

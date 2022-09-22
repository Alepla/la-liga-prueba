import { ClubsItems, ClubsResponse } from '../../../clubsTypes';

export const clubUpdated: ClubsItems = {
    avatar: 'https://placeimg.com/293/290',
    favorite: true,
    foundationDate: '1955-12-10T22:08:44.436Z',
    id: 'ba2c700b-1c0a-41e2-a881-b94abf47d11f',
    name: 'Queens Park Rangers',
};

export const nonUpdatedClubUpdated: ClubsItems = {
    avatar: 'https://placeimg.com/293/290',
    favorite: true,
    foundationDate: '1955-12-10T22:08:44.436Z',
    id: 'qa2c700b-1c0a-41e2-a881-b94abf47d11f',
    name: 'Queens Park Rangers',
};

export const clubsItems: ClubsItems[] = [
    {
        avatar: 'https://placeimg.com/293/290',
        favorite: false,
        foundationDate: '1955-12-10T22:08:44.436Z',
        id: 'ba2c700b-1c0a-41e2-a881-b94abf47d11f',
        name: 'Queens Park Rangers',
    },
    {
        avatar: 'https://placeimg.com/293/290',
        favorite: false,
        foundationDate: '1956-12-10T22:08:44.436Z',
        id: 'aa2c700b-1c0a-41e2-a441-b94abf47d11f',
        name: 'Betis',
    },
];

export const clubsResponse: ClubsResponse = {
    results: [
        {
            avatar: 'https://placeimg.com/293/290',
            favorite: false,
            foundationDate: '1955-12-10T22:08:44.436Z',
            id: 'ba2c700b-1c0a-41e2-a881-b94abf47d11f',
            name: 'Queens Park Rangers',
        },
        {
            avatar: 'https://placeimg.com/293/290',
            favorite: false,
            foundationDate: '1956-12-10T22:08:44.436Z',
            id: 'aa2c700b-1c0a-41e2-a441-b94abf47d11f',
            name: 'Betis',
        },
    ],
    total: 10,
};

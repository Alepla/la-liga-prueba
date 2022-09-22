import { ClubsListProps } from '../../../clubsTypes';

export const providerPropsFalse: ClubsListProps = {
    clubs: [
        {
            avatar: 'https://placeimg.com/293/290',
            favorite: false,
            foundationDate: '1955-12-10T22:08:44.436Z',
            id: 'ba2c700b-1c0a-41e2-a881-b94abf47d11f',
            name: 'Queens Park Rangers',
        },
    ],
    updateClub: jest.fn(),
};

export const providerPropsTrue: ClubsListProps = {
    clubs: [
        {
            avatar: 'https://placeimg.com/293/290',
            favorite: true,
            foundationDate: '1955-12-10T22:08:44.436Z',
            id: 'ba2c700b-1c0a-41e2-a881-b94abf47d11f',
            name: 'Queens Park Rangers',
        },
    ],
    updateClub: jest.fn(),
};

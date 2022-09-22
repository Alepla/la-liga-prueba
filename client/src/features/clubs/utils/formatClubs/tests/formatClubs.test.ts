import { formatClubsUpdateCheck, formatClubsDeleteFromFavs } from '../formatClubs';
import { clubUpdated, clubsResponse, nonUpdatedClubUpdated, clubsItems } from './formatClubs.mock';

describe('formatClubs tests', () => {
    it('formatClubsUpdateCheck should return the updated array with the objected updated', () => {
        const newClubs = formatClubsUpdateCheck(clubUpdated, clubsItems);
        expect(newClubs[0].favorite).toBe(true);
    });

    it('formatClubsUpdateCheck should return the array exactly as sent if it does not find the field to update', () => {
        const newClubs = formatClubsUpdateCheck(nonUpdatedClubUpdated, clubsItems);
        expect(newClubs).toStrictEqual(clubsItems);
    });

    it('formatClubsDeleteFromFavs should return the total updated', () => {
        const newClubs = formatClubsDeleteFromFavs(clubUpdated, clubsResponse);
        expect(newClubs.total).toBe(9);
    });

    it('formatClubsDeleteFromFavs should return the array of results updated', () => {
        const newClubs = formatClubsDeleteFromFavs(clubUpdated, clubsResponse);
        expect(newClubs.results.length).toBe(1);
    });
});

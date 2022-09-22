import { formatDates, getYear } from '../formatDates';

describe('formatDate utility tests', () => {
    const date = '2003-09-04T16:07:39.933Z';
    const invalidDate = '2003-09-04T16';
    it('should return a date formated correctly', async () => {
        expect(formatDates(date)).toBe('4/9/2003');
    });

    it('should return a invalid date', async () => {
        expect(formatDates(invalidDate)).toBe('Invalid Date');
    });

    it('should return a year', async () => {
        expect(getYear(date)).toBe('2003');
    });

    it('should return a unknown year', async () => {
        expect(getYear(invalidDate)).toBe('*');
    });
});

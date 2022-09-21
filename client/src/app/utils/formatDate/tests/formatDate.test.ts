import { formatDates } from '../formatDates';

describe('formatDate utility tests', () => {
    it('should return a date formated correctly', async () => {
        const date = '2003-09-04T16:07:39.933Z';
        expect(formatDates(date)).toBe('4/9/2003');
    });

    it('should return a invalid date', async () => {
        const invalidDate = '2003-09-04T16';
        expect(formatDates(invalidDate)).toBe('Invalid Date');
    });
});

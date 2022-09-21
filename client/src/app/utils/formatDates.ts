/**
 *
 * @param date
 * @returns This utility takes a string date and formats it
 */
export const formatDates = (date: string): string => {
    const newDate = new Date(date);
    if (isValidDate(newDate)) return newDate.getDay() + '/' + (newDate.getMonth() + 1) + '/' + newDate.getFullYear();
    else {
        return 'Invalid Date';
    }
};

/**
 *
 * @param date
 * @returns Check if its a valid date
 */
const isValidDate = (date: Date): number | boolean => {
    return date instanceof Date && Number(!isNaN(Number(date)));
};

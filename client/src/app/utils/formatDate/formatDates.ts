/**
 *
 * @param date
 * @returns This utility takes a string date and giving it back the full date formated
 */
export const getFullDate = (date: string): string => {
    const newDate = new Date(date);
    if (isValidDate(newDate)) return newDate.getDay() + '/' + (newDate.getMonth() + 1) + '/' + newDate.getFullYear();
    else {
        return 'Invalid Date';
    }
};

/**
 *
 * @param date
 * @returns This utility takes a string date and giving it back the year formated
 */
export const getYear = (date: string): string => {
    const newDate = new Date(date);
    if (isValidDate(newDate)) return newDate.getFullYear().toString();
    else {
        return '*';
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

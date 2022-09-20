export const formatDates = (date: string) => {
    const newDate = new Date(date);
    return newDate.getDay() + '/' + newDate.getMonth() + '/' + newDate.getFullYear();
};

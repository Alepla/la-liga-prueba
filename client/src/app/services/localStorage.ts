/**
 * With this service we extract the local storage token
 * @returns
 */
export const getAccessToken = () => localStorage.getItem('token')?.slice(1, -1);

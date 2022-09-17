/**
 * With this service we extract the local storage token
 * @returns
 */

export const setTokens = (authRes: string) => {
    localStorage.setItem('accessToken', JSON.stringify(authRes));
};

export const removeTokens = () => {
    localStorage.removeItem('accessToken');
};

export const getAccessToken = () => localStorage.getItem('accessToken')?.slice(1, -1);

/**
 *
 * @param authRes
 * We store the token in local storage.
 */
export const setTokens = (authRes: string): void => {
    localStorage.setItem('accessToken', JSON.stringify(authRes));
};
/**
 * We delete the token and refresh the page.
 */
export const removeTokens = (): void => {
    localStorage.removeItem('accessToken');
    window.location.reload();
};

/**
 *
 * @returns With this service we extract the local storage token.
 */
export const getAccessToken = (): string | undefined => localStorage.getItem('accessToken')?.slice(1, -1);

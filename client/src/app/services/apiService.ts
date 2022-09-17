export const post = async function (url: string, body: any, headers: any) {
    return await fetch(url, { method: 'post', headers, body }).then((response) => {
        return response.json();
    });
};

export type ClubHeaders = {
    login: {
        accessToken: string;
    };
};

export type ClubsParams = {
    offset: number;
    limit: number;
    name_like: string;
    favorite: boolean;
};

export type ClubsItems = {
    id?: string;
    avatar?: string;
    favourite?: boolean;
    name?: string;
    foundationDate?: string;
};

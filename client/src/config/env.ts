const env = {
    development: {
        BASE_URL: 'http://localhost:4000/',
    },
    production: {
        BASE_URL: 'http://localhost:4000/',
    },
    test: {
        BASE_URL: 'http://localhost:4000/',
    },
};

export const env_var = env[process.env.NODE_ENV];

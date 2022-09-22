const env = {
    development: {
        BASE_URL: 'http://localhost:' + process.env.REACT_APP_PORT + '/',
    },
    production: {
        BASE_URL: 'http://51.178.18.68:' + process.env.REACT_APP_PORT + '/',
    },
    test: {
        BASE_URL: 'http://localhost:' + process.env.REACT_APP_PORT + '/',
    },
};
export const env_var = env[process.env.REACT_APP_NODE_ENV as keyof typeof env];

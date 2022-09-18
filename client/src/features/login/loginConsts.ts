export const LOGIN_CONF = {
    email: {
        value: '',
        validations: {
            required: true,
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        },
    },
    password: {
        value: '',
        validations: {
            required: true,
            pattern: null,
        },
    },
};

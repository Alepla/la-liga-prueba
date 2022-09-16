import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { isAuthenticated } from '../../app/services/authenticationService';
import { AuthCredentials } from './loginTypes';
import { history } from '../../helpers/history';

/**
 *
 * @returns
 */
export const Login = () => {
    const { register, handleSubmit } = useForm<AuthCredentials>();

    const onSubmit: SubmitHandler<AuthCredentials> = (data) => console.log(data);

    useEffect(() => {
        if (isAuthenticated()) {
            history.push('/clubs');
        }
    }, []);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div>
                        <label>Email</label>
                        <input type="text" {...register('email')} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" autoComplete="off" {...register('password')} />
                    </div>
                    <div>
                        <button>Sign In</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;

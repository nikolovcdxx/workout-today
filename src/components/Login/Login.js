import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';

export default function Login() {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            username,
            password
        } = Object.fromEntries(new FormData(e.target));

        authService.login(username, password)
            .then(authData => {
                if (authData.msg) {
                    console.log(authData.msg);
                } else {
                    userLogin(authData);
                    navigate('/');
                }
            })
            .catch(() => {
                navigate('/404');
            });
    };

    return (
        <section>
            <div className="form">
                <h2>Login</h2>
                <form className="login-form" onSubmit={onSubmit}>
                    <input type="text" name="username" id="username" placeholder="username" />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                    />
                    <button type="submit">login</button>
                    <p className="message">
                        Not registered? <Link to="/register"> Create an account </Link>
                    </p>
                </form>
            </div>
        </section>
    );
};
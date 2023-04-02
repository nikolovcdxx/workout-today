import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';

export default function Register() {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const username = formData.get('username');
        const password = formData.get('password');
        const repass = formData.get('repass');

        if (password !== repass) {
            return; // create validation
        }

        authService.register(username, password, repass)
            .then(authData => {
                userLogin(authData);
                navigate('/');
            });
    };

    return (
        <section>
            <div className="form">
                <h2>Register</h2>
                <form className="login-form" onSubmit={onSubmit}>
                    <input type="text" name="username" id="register-username" placeholder="username" />
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        placeholder="password"
                    />
                    <input
                        type="password"
                        name="repass"
                        id="repass"
                        placeholder="repeat password"
                    />
                    <button type="submit">register</button>
                    <p className="message">
                        Already registered? <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </section>
    );
};
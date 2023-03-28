import { Link, useNavigate } from 'react-router-dom';

import { login } from '../../services/authService';

export default function Login() {
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            username,
            password
        } = Object.fromEntries(new FormData(e.target));

        console.log(username, password);

        login(username, password)
            .then(authData => {
                authData.msg ? console.log(authData.msg) : console.log(authData);
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
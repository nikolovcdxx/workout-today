import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <section id="login">
            <div class="form">
                <h2>Login</h2>
                <form class="login-form">
                    <input type="text" name="username" id="username" placeholder="username" />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                    />
                    <button type="submit">login</button>
                    <p class="message">
                        Not registered? <Link to="/register">Create an account</Link>
                    </p>
                </form>
            </div>
        </section>
    );
};
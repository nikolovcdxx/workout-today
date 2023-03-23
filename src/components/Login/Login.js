import { Link } from 'react-router-dom';

export default function Login() {
    const onSubmit = (e) => {
        e.preventDefault();

        const {
            username,
            password
        } = Object.fromEntries(new FormData(e.target));

        console.log(username, password);
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
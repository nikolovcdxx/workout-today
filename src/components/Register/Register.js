import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <section>
            <div className="form">
                <h2>Register</h2>
                <form className="login-form">
                    <input type="text" name="username" id="register-username" placeholder="username" />
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        placeholder="password"
                    />
                    <input
                        type="password"
                        name="re-password"
                        id="repeat-password"
                        placeholder="repeat password"
                    />
                    <button type="submit">login</button>
                    <p className="message">
                        Already registered? <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </section>
    );
};
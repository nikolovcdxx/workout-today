import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';

export default function Register() {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const [incorrectMsg, setIncorrectMsg] = useState('');
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        username: '',
        password: '',
        repass: ''
    });

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const minLength = (e) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: values[e.target.name].length < 3
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        try {
            if (values.password !== values.repass) {
                throw new Error('Passwords don\'t match');
            }

            if (values.password.length < 3) {
                throw new Error('Password should be atleast 3 characters long!');
            }

            if (values.username.length < 3) {
                throw new Error('Username should be atleast 3 characters long!');
            }

            authService.register(values.username, values.password, values.repass)
                .then(authData => {
                    if (authData.msg) {
                        setIncorrectMsg(authData.msg);
                    } else {
                        userLogin(authData);
                        navigate('/');
                    }
                });
        } catch (err) {
            setIncorrectMsg(err.message);
        }
    };

    return (
        <section>
            <div className="form">
                <h2>Register</h2>
                <form className="login-form" onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="username"
                        id="register-username"
                        placeholder="username"
                        value={values.username}
                        onChange={changeHandler}
                        onBlur={(e) => minLength(e)}
                    />
                    {errors.username &&
                        <p> Username should be atleast 3 characters long!</p>
                    }
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        placeholder="password"
                        value={values.password}
                        onChange={changeHandler}
                        onBlur={(e) => minLength(e)}
                    />
                    {errors.password &&
                        <p> Password should be atleast 3 characters long!</p>
                    }
                    <input
                        type="password"
                        name="repass"
                        id="repass"
                        placeholder="repeat password"
                        value={values.repass}
                        onChange={changeHandler}
                    />
                    {errors.repass &&
                        <p> Passwords don\'t match!</p>
                    }
                    {incorrectMsg && <p>{incorrectMsg}</p>}
                    <button type="submit">register</button>
                    <p className="message">
                        Already registered? <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </section>
    );
};
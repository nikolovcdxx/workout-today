import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

import styles from './Navigation.module.css';

export default function Navigation() {
    const { user } = useContext(AuthContext);

    const usernameCap = (u) => {
        return u.charAt(0).toUpperCase() + u.slice(1);
    };

    return (
        <nav>
            <Link className={styles.active} to="/">
                Fitness
            </Link>
            <NavLink to="/workouts"
                style={({ isActive }) => { return isActive ? { backgroundColor: 'gray' } : undefined; }}
            >
                All Workouts Today
            </NavLink>

            {user.accessToken
                ? <div className={styles.user}>
                    <NavLink to="/create"
                        style={({ isActive }) => { return isActive ? { backgroundColor: 'gray' } : undefined; }}
                    >
                        Create Your Workout
                    </NavLink>
                    <div className={styles.profile}>
                        <span>
                            Welcome, {usernameCap(user.username)}
                        </span>
                        <NavLink to="/profile"
                            style={({ isActive }) => { return isActive ? { backgroundColor: 'gray' } : undefined; }}
                        >
                            My Workout
                        </NavLink>
                        <Link to="/logout">Logout</Link>
                    </div>
                </div>
                : <div className={styles.guest}>
                    <div className={styles.profile}>
                        <NavLink to="/login"
                            style={({ isActive }) => { return isActive ? { backgroundColor: 'gray' } : undefined; }}
                        >
                            Login
                        </NavLink>
                        <NavLink to="/register"
                            style={({ isActive }) => { return isActive ? { backgroundColor: 'gray' } : undefined; }}
                        >
                            Register
                        </NavLink>
                    </div>

                </div>}
        </nav>
    );
}
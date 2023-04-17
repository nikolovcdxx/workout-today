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
            <div>
                <Link className={styles.active} to="/">
                    WORKOUT TODAY
                </Link>
            </div>
            <NavLink to="/workouts"
                style={({ isActive }) => { return isActive ? { backgroundColor: '#620000' } : undefined; }}
            >
                All Workouts
            </NavLink>

            {user.accessToken
                ? <div className={styles.user}>
                    <NavLink to="/create"
                        style={({ isActive }) => { return isActive ? { backgroundColor: '#620000' } : undefined; }}
                    >
                        Create Your Workout
                    </NavLink>
                    <div className={styles.profile}>
                        <span>
                            Welcome, {usernameCap(user.username)}
                        </span>
                        <NavLink to="/my-workout"
                            style={({ isActive }) => { return isActive ? { backgroundColor: '#620000' } : undefined; }}
                        >
                            My Workout
                        </NavLink>
                        <Link to="/logout">Logout</Link>
                    </div>
                </div>
                : <div className={styles.guest}>
                    <div className={styles.profile}>
                        <NavLink to="/login"
                            style={({ isActive }) => { return isActive ? { backgroundColor: '#620000' } : undefined; }}
                        >
                            Login
                        </NavLink>
                        <NavLink to="/register"
                            style={({ isActive }) => { return isActive ? { backgroundColor: '#620000' } : undefined; }}
                        >
                            Register
                        </NavLink>
                    </div>

                </div>}
        </nav>
    );
}
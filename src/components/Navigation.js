import { Link, NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';


export default function Navigation() {
    return (
        <nav>
            <Link className={styles.active} to="/">
                Fitness
            </Link>
            <NavLink to="/catalog"
                style={({ isActive }) => { return isActive ? { backgroundColor: 'green' } : undefined; }}
            >
                All Workouts Today
            </NavLink>
            {/* Logged users */}
            <div className={styles.user}>
                <NavLink to="/create"
                    style={({ isActive }) => { return isActive ? { backgroundColor: 'green' } : undefined; }}
                >
                    Create Your Workout
                </NavLink>
                <div className={styles.profile}>
                    <span>
                        Welcome, {'{'}username{'}'}
                    </span>
                    <NavLink to="/profile"
                        style={({ isActive }) => { return isActive ? { backgroundColor: 'green' } : undefined; }}
                    >
                        My Workout
                    </NavLink>
                    <Link to="/logout">Logout</Link>
                </div>
            </div>
            {/* Guest users */}

            <div className={styles.guest}>
                <div className={styles.profile}>
                    <NavLink to="/login"
                        style={({ isActive }) => { return isActive ? { backgroundColor: 'green' } : undefined; }}
                    >
                        Login
                    </NavLink>
                    <NavLink to="/register"
                        style={({ isActive }) => { return isActive ? { backgroundColor: 'green' } : undefined; }}
                    >
                        Register
                    </NavLink>
                </div>

            </div>
        </nav>
    );
}
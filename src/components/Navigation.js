import { Link } from 'react-router-dom';

import styles from './Navigation.module.css';


export default function Navigation() {
    return (
        <nav>
            <Link className={styles.active} to="/">
                Fitness
            </Link>
            <Link to="/catalog">All Workouts Today</Link>
            {/* Logged users */}
            <div className={styles.user}>
                <Link to="/create">Create Your Workout</Link>
                <div className={styles.profile}>
                    <span>
                        Welcome, {'{'}username{'}'}
                    </span>
                    <Link to="/profile">My Workout</Link>
                    <Link to="/logout">Logout</Link>
                </div>
            </div>
            {/* Guest users */}

            <div className={styles.guest}>
                <div className={styles.profile}>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>

            </div>
        </nav>
    );
}
import styles from './Navigation.module.css';


export default function Navigation() {
    return (
        <nav>
            <a className={styles.active} href="/">
                Fitness
            </a>
            <a href="/">All Workouts Today</a>
            {/* Logged users */}
            <div className={styles.user}>
                <a href="/">Create Your Workout</a>
                <div className={styles.profile}>
                    <span>
                        Welcome, {'{'}username{'}'}
                    </span>
                    <a href="/">My Workout</a>
                    <a href="/">Logout</a>
                </div>
            </div>
            {/* Guest users */}

            <div className={styles.guest}>
                <div className={styles.profile}>
                    <a href="/">Login</a>
                    <a href="/">Register</a>
                </div>

            </div>
        </nav>
    );
}
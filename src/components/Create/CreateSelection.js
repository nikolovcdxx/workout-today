import { Link } from 'react-router-dom';

export default function CreateSelection() {
    return (
        <section id="dashboard">
            <ul className="card-wrapper">
                <li className="card">
                    <img src="/push-day-exercises.jpg" alt="PUSH" />

                    <Link className="details-btn" to="/create/push">
                        PUSH
                    </Link>
                </li>
                <li className="card">
                    <img src="/pull-day-exercises.jpg" alt="PULL" />

                    <Link className="details-btn" to="/create/pull">
                        PULL
                    </Link>
                </li>
                <li className="card">
                    <img src="/legs-day-exercises.jpg" alt="LEGS" />

                    <Link className="details-btn" to="/create/legs">
                        LEGS
                    </Link>
                </li>
            </ul>
        </section>
    );
}
import { Link } from 'react-router-dom';

export default function CatalogItem({ workout }) {
    const usernameCap = (u) => {
        return u.charAt(0).toUpperCase() + u.slice(1);
    };

    
    return (
        <li className="item">
            <header className="pad-med">
                <h2>{`${usernameCap(workout.ownerName)}'s workout`}</h2>
            </header>
            <div className="align-center">
                <img className="img-thumb" src={`/images/${workout.type}.gif`} alt="" />
            </div>
            <footer className="align-center pad-med">
                <span>
                    His choise today: <div><strong>{workout.type.toUpperCase()}</strong></div>
                </span>
                <Link className="action" to={`/workouts/${workout._id}`}>
                    See details
                </Link>
            </footer>
        </li>
    );
};
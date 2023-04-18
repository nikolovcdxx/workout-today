import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { WorkoutContext } from '../../contexts/WorkoutContext';
import CatalogItem from './CatalogItem/CatalogItem';

import './catalog.css';

export default function Catalog() {
    const { workouts } = useContext(WorkoutContext);
    const noWorkouts =
        <div style={{width: '96%', marginRight: '32px'}} className="item pad-large align-center">
            <p>Nothing has been listed yet. Be the first!</p>
            <div>
                <Link className="action" to="/create">
                    Create Workout
                </Link>
            </div>
        </div>;

    return (
        <section id="catalog-section" className="spaced">
            <h1 className="item">Workouts</h1>
            <ul className="catalog cards">
                {workouts.length > 0
                    ? workouts.map(x => <CatalogItem key={x._id} workout={x} />)
                    : noWorkouts
                }
            </ul>
        </section>
    );
};
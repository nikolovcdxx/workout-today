import { useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { WorkoutContext } from '../../contexts/WorkoutContext';

import DetailsPush from './DetailsPush/DetailsPush';
import DetailsPull from './DetailsPull/DetailsPull';
import DetailsLegs from './DetailsLegs/DetailsLegs';

import * as workoutService from '../../services/workoutService';

export default function Details() {
    const { selectWorkout, fetchWorkoutDetails, workoutLike } = useContext(WorkoutContext);
    const { workoutId } = useParams();

    const currentWorkout = selectWorkout(workoutId);

    let nameCap;
    if (currentWorkout.type) {
        nameCap = (u) => {
            return u.charAt(0).toUpperCase() + u.slice(1);
        };
    }

    useEffect(() => {
        (async () => {
            const workoutDetails = await workoutService.getOne(workoutId);

            fetchWorkoutDetails(workoutId, { ...workoutDetails });
        })();
    }, []);

    return (
        <section id="details">
            {currentWorkout.type
                ? <div id="details-wrapper">
                    <p id="details-title">{`${nameCap(currentWorkout.ownerName)}'s Workout Details`}</p>
                    <div id="img-wrapper">
                        <img src={`/images/${currentWorkout.type}.gif`} alt="example1" />
                    </div>
                    {currentWorkout.type === 'push' &&
                        <DetailsPush {...currentWorkout.exercises} />
                    }
                    {currentWorkout.type === 'pull' &&
                        <DetailsPull {...currentWorkout.exercises} />
                    }
                    {currentWorkout.type === 'legs' &&
                        <DetailsLegs {...currentWorkout.exercises} />
                    }
                    <div id="likes">
                        Likes: <span id="likes-count">0</span>
                    </div>
                    <div id="action-buttons">
                        <Link to="" className="btn-details">
                            Like
                        </Link>
                    </div>
                </div>
                : <h2 className='details-loading'>Loading...</h2>}
        </section>
    );
}
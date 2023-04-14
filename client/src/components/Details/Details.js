import { useContext, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { WorkoutContext } from '../../contexts/WorkoutContext';

import DetailsPush from './DetailsPush/DetailsPush';
import DetailsPull from './DetailsPull/DetailsPull';
import DetailsLegs from './DetailsLegs/DetailsLegs';

import * as workoutService from '../../services/workoutService';

export default function Details() {
    const navigate = useNavigate();

    const { selectWorkout, workoutRemove, fetchWorkoutDetails, workoutLike } = useContext(WorkoutContext);
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

    const workoutDeleteHandler = () => {
        const confirmation = window.confirm('Are you sure you want to delete this workout?');

        if (confirmation) {
            workoutService.remove(workoutId)
                .then(() => {
                    workoutRemove(workoutId);
                    navigate('/catalog');
                });
        }
    };

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

                    {/*Edit and Delete are only for creator*/}
                    <div id="action-buttons">
                        <Link to="" id="like-btn">
                            Like
                        </Link>
                        <Link to="" id="edit-btn">
                            Edit
                        </Link>
                        <Link to="" id="delete-btn">
                            Delete
                        </Link>
                    </div>
                </div>
                : 'Loading...'}
        </section>
    );
}
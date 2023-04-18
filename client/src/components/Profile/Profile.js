import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { WorkoutContext } from '../../contexts/WorkoutContext';

import ProfilePush from './ProfilePush/ProfilePush';
import ProfilePull from './ProfilePull/ProfilePull';
import ProfileLegs from './ProfileLegs/ProfileLegs';

import * as workoutService from '../../services/workoutService';

export default function Profile() {
    const navigate = useNavigate();

    const { myWorkout, workoutRemove } = useContext(WorkoutContext);
    const myId = JSON.parse(localStorage.getItem('auth'))._id;

    const currentWorkout = myWorkout(myId);
    const workoutId = currentWorkout._id;

    const workoutDeleteHandler = () => {
        const confirmation = window.confirm('Are you sure you want to delete this workout?');

        if (confirmation) {
            workoutService.remove(workoutId)
                .then(() => {
                    workoutRemove(workoutId);
                    navigate('/workouts');
                });
        }
    };

    const noWorkout =
        <div style={{ width: '100%', marginRight: '32px' }} className="item pad-large align-center">
            <p>
                No workout yet!
            </p>
            <div>
                <Link className="action" to="/create">
                    Create Now
                </Link>
            </div>
        </div>;

    return (
        <section id="details">
            {currentWorkout.type
                ? <div id="details-wrapper">
                    <p id="details-title">My Workout</p>
                    <div id="img-wrapper">
                        <img src={`/images/${currentWorkout.type}.gif`} alt="example1" />
                    </div>
                    {currentWorkout.type === 'push' &&
                        <ProfilePush {...currentWorkout.exercises} />
                    }
                    {currentWorkout.type === 'pull' &&
                        <ProfilePull {...currentWorkout.exercises} />
                    }
                    {currentWorkout.type === 'legs' &&
                        <ProfileLegs {...currentWorkout.exercises} />
                    }

                    <div id="likes">
                        Likes: <span id="likes-count">{currentWorkout.likedBy.length}</span>
                    </div>
                    <div id="action-buttons">
                        <Link to={`/my-workout/${workoutId}/edit`}>
                            Edit
                        </Link>
                        <button className="btn-details" onClick={workoutDeleteHandler}>
                            Delete
                        </button>
                    </div>
                </div> : noWorkout}
        </section>
    );
}
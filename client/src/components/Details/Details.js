import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { WorkoutContext } from '../../contexts/WorkoutContext';
import * as workoutService from '../../services/workoutService';

import DetailsPush from './DetailsPush/DetailsPush';
import DetailsPull from './DetailsPull/DetailsPull';
import DetailsLegs from './DetailsLegs/DetailsLegs';

import './details.css';

export default function Details() {
    const { selectWorkout, fetchWorkoutDetails, workoutLike } = useContext(WorkoutContext);
    const { workoutId } = useParams();

    const currentWorkout = selectWorkout(workoutId);
    const currentUserId = JSON.parse(localStorage.getItem('auth'))._id;


    let isLiked;
    let nameCap;
    if (currentWorkout.type) {
        isLiked = currentWorkout.likedBy.includes(currentUserId) ? true : false;
        nameCap = (u) => {
            return u.charAt(0).toUpperCase() + u.slice(1);
        };
    }

    useEffect(() => {
        (async () => {
            const workoutDetails = await workoutService.getOne(workoutId);

            fetchWorkoutDetails(workoutId, { ...workoutDetails });
        })();
    }, [fetchWorkoutDetails, workoutId]);

    function likeHandler(e) {
        e.preventDefault();

        workoutService.like(workoutId, { userId: currentUserId })
            .then(() => {
                workoutLike(workoutId, currentUserId);
            });
    }

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
                        Likes: <span id="likes-count">{currentWorkout.likedBy.length}</span>
                    </div>
                    {!isLiked && currentUserId &&
                        <div id="action-buttons">
                            <button className="btn-details" onClick={likeHandler}>
                                Like
                            </button>
                        </div>
                    }
                </div>
                : <h2 className='details-loading'>Loading...</h2>}
        </section>
    );
}
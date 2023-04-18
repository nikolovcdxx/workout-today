import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import * as workoutService from '../../services/workoutService';
import { WorkoutContext } from '../../contexts/WorkoutContext';

import EditPush from './EditPush/EditPush';
import EditPull from './EditPull/EditPull';
import EditLegs from './EditLegs/EditLegs';

export default function Edit() {
    const navigate = useNavigate();
    const { workoutEdit, selectWorkout } = useContext(WorkoutContext);
    const { workoutId } = useParams();

    const currentWorkout = selectWorkout(workoutId);

    const generateHandler = (e) => {
        e.preventDefault();

        const exercises = Object.fromEntries(new FormData(e.target));
        const workoutData = {
            type: currentWorkout.type,
            exercises,
            ownerName: currentWorkout.ownerName
        };

        workoutService.edit(workoutId, workoutData)
            .then(result => {
                workoutEdit(workoutId, result);
                navigate('/my-workout');
            });
    };

    return (
        <form onSubmit={generateHandler}>
            {currentWorkout.type === 'push' &&
                <EditPush {...currentWorkout.exercises} />
            }
            {currentWorkout.type === 'pull' &&
                <EditPull {...currentWorkout.exercises} />
            }
            {currentWorkout.type === 'legs' &&
                <EditLegs {...currentWorkout.exercises} />
            }
            <button className="btn-generate">EDIT</button>
        </form>
    );
}
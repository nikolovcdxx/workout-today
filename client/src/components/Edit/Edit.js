import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import * as workoutService from '../../services/workoutService';
import { WorkoutContext } from '../../contexts/WorkoutContext';

export default function Edit() {
    const navigate = useNavigate();
    const { workoutEdit, selectWorkout } = useContext(WorkoutContext);
    const workoutId = useParams();

    const currentWorkout = selectWorkout(workoutId);

    const generateHandler = (e) => {
        e.preventDefault();
        const exercises = Object.fromEntries(new FormData(e.target));

        const workoutData = {
            type: currentWorkout.type,
            exercises
        };

        workoutService.edit(workoutId, workoutData)
            .then(result => {
                workoutEdit(workoutId, result);
                navigate(`/workouts/${workoutId}`);
            });

    };

    return <h2>EDIT FORMA ZA TRENIROVKATA NA CHOBANIN X</h2>;
}
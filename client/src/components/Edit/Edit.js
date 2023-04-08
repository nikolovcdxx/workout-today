import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import * as workoutService from '../../services/workoutService';
import { WorkoutContext } from '../../contexts/WorkoutContext';

export default function Edit() {
    const [currentWorkout, setCurrentWorkout] = useState({});
    const { updateWorkout } = useContext(WorkoutContext);
    const workoutId = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        workoutService.getOne(workoutId)
            .then(workoutData => {
                setCurrentWorkout(workoutData);
            });
    });

    return <h2>EDIT FORMA ZA TRENIROVKATA NA CHOBANIN X</h2>;
}
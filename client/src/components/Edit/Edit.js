import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import * as workoutService from '../../services/workoutService';
import { WorkoutContext } from '../../contexts/WorkoutContext';

export default function Edit() {
    const [currentWorkout, setCurrentWorkout] = useState({});  
    const { workoutEdit } = useContext(WorkoutContext);

    const workoutId = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        workoutService.getOne(workoutId)
            .then(workoutData => {
                setCurrentWorkout(workoutData);
            }, []);

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
    });

    return <h2>EDIT FORMA ZA TRENIROVKATA NA CHOBANIN X</h2>;
}
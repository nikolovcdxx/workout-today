import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { WorkoutContext } from '../../../contexts/WorkoutContext';
import * as workoutService from '../../../services/workoutService';
import workoutCreation from '../../../services/workoutCreation';
import videoService from '../../../services/videoService';

import '../create.css';

export default function Push() {
    const navigate = useNavigate();
    const { workouts, workoutAdd } = useContext(WorkoutContext);

    const generateHandler = (e) => {
        e.preventDefault();
        try {
            const workoutData = workoutCreation(e, workouts, 'legs');

            if (typeof workoutData === 'string') {
                throw new Error(workoutData);
            }

            workoutService.create(workoutData)
                .then(result => {
                    workoutAdd(result);
                });

            navigate('/workouts');
        } catch (err) {
            alert(err.message);
        }
    };

    const [quadriceps1, setQuadriceps1] = useState('');
    const [quadriceps2, setQuadriceps2] = useState('');
    const [hamstrings, setHamstrings] = useState('');
    const [glutes1, setGlutes1] = useState('');
    const [glutes2, setGlutes2] = useState('');
    const [calves, setCalves] = useState('');


    const onClickVideoHandler = (e) => {
        const id = e.target.id;
        switch (id) {
            case 'quad1':
                videoService(quadriceps1);
                break;
            case 'quad2':
                videoService(quadriceps2);
                break;
            case 'hamstring':
                videoService(hamstrings);
                break;
            case 'gl1':
                videoService(glutes1);
                break;
            case 'gl2':
                videoService(glutes2);
                break;
            case 'calf':
                videoService(calves);
                break;
            default:
                break;
        }
    };

    return (
        <form onSubmit={generateHandler}>
            <section id="dashboard">
                <h2 className='card-title'>LEGS EXERCISES</h2>
                <ul className="push-card-wrapper">
                    <li className="push-card">
                        <label htmlFor="quadriceps1">QUADRICEPS (FRONT THIGH)</label>
                        <select name="quadriceps1" id="quadriceps1" value={quadriceps1} onChange={(e) => setQuadriceps1(e.target.value)}>
                            <option value="none" hidden>Select an Exercise</option>
                            <option value="front-squats" disabled={quadriceps2 === 'front-squats'}>Front Squats</option>
                            <option value="hack-squats" disabled={quadriceps2 === 'hack-squats'}>Hack Squats</option>
                            <option value="high-bar-back-squats" disabled={quadriceps2 === 'high-bar-back-squats'}>High Bar Back Squats</option>
                            <option value="leg-extensions" disabled={quadriceps2 === 'leg-extensions'}>Leg Extensions</option>
                            <option value="leg-press" disabled={quadriceps2 === 'leg-press'}>Leg Press</option>
                        </select>
                        <button type="button" id="quad1" onClick={onClickVideoHandler}>How To Do It Properly</button>

                        <select name="quadriceps2" id="quadriceps2" value={quadriceps2} onChange={(e) => setQuadriceps2(e.target.value)}>
                            <option value="none" hidden>Select an Exercise</option>
                            <option value="front-squats" disabled={quadriceps1 === 'front-squats'}>Front Squats</option>
                            <option value="hack-squats" disabled={quadriceps1 === 'hack-squats'}>Hack Squats</option>
                            <option value="high-bar-back-squats" disabled={quadriceps1 === 'high-bar-back-squats'}>High Bar Back Squats</option>
                            <option value="leg-extensions" disabled={quadriceps1 === 'leg-extensions'}>Leg Extensions</option>
                            <option value="leg-press" disabled={quadriceps1 === 'leg-press'}>Leg Press</option>
                        </select>
                        <button type="button" id="quad2" onClick={onClickVideoHandler}>How To Do It Properly</button>

                        <label htmlFor="hamstrings">HAMSTRINGS (BACK THIGH)</label>
                        <select name="hamstrings" id="hamstrings" value={hamstrings} onChange={(e) => setHamstrings(e.target.value)}>
                            <option value="none" hidden>Select an Exercise</option>
                            <option value="seated-leg-curl">Seated Leg Curl</option>
                            <option value="barbell-romanian-deadlift">Barbell Romanian Deadlift</option>
                            <option value="glute-ham-raises">Glute Ham Raises</option>
                            <option value="stationary-split-squats">Stationary Split Squats</option>
                        </select>
                        <button type="button" id="hamstring" onClick={onClickVideoHandler}>How To Do It Properly</button>
                    </li>
                    <li className="push-card">
                        <label htmlFor="glutes1">GLUTES (BUTT)</label>
                        <select name="glutes1" id="glutes1" value={glutes1} onChange={(e) => setGlutes1(e.target.value)}>
                            <option value="none" hidden>Select an Exercise</option>
                            <option value="barbell-hip-thrust" disabled={glutes2 === 'barbell-hip-thrust'}>Barbell Hip Thrust</option>
                            <option value="45°-hip-extension" disabled={glutes2 === '45°-hip-extension'}>45° Hip Extension</option>
                            <option value="deadlift" disabled={glutes2 === 'deadlift'}>Deadlift</option>
                            <option value="cable-pull-throughs" disabled={glutes2 === 'cable-pull-throughs'}>Cable Pull Throughs</option>
                            <option value="glute-medius-kickbacks" disabled={glutes2 === 'glute-medius-kickbacks'}>Glute Medius Kickbacks</option>
                        </select>
                        <button type="button" id="gl1" onClick={onClickVideoHandler}>How To Do It Properly</button>

                        <select name="glutes2" id="glutes2" value={glutes2} onChange={(e) => setGlutes2(e.target.value)}>
                            <option value="none" hidden>Select an Exercise</option>
                            <option value="barbell-hip-thrust" disabled={glutes1 === 'barbell-hip-thrust'}>Barbell Hip Thrust</option>
                            <option value="45°-hip-extension" disabled={glutes1 === '45°-hip-extension'}>45° Hip Extension</option>
                            <option value="deadlift" disabled={glutes1 === 'deadlift'}>Deadlift</option>
                            <option value="cable-pull-throughs" disabled={glutes1 === 'cable-pull-throughs'}>Cable Pull Throughs</option>
                            <option value="glute-medius-kickbacks" disabled={glutes1 === 'glute-medius-kickbacks'}>Glute Medius Kickbacks</option>
                        </select>
                        <button type="button" id="gl2" onClick={onClickVideoHandler}>How To Do It Properly</button>

                        <label htmlFor="calves">CALVES</label>
                        <select name="calves" id="calves" value={calves} onChange={(e) => setCalves(e.target.value)}>
                            <option value="none" hidden>Select an Exercise</option>
                            <option value="standing-calf-raises">Standing Calf Raises</option>
                            <option value="seated-calf-raises">Seated Calf Raises</option>
                            <option value="leg-press-calf-raises">Leg Press Calf Raises</option>
                        </select>
                        <button type="button" id="calf" onClick={onClickVideoHandler}>How To Do It Properly</button>
                    </li>
                </ul>

            </section>
            <button className="btn-generate">GENERATE</button>
        </form>
    );
}
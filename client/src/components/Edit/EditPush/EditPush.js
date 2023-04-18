import { useState } from 'react';

import videoService from '../../../services/videoService';

export default function EditPush({ ...exercises }) {
    const [upperChest, setUpperChest] = useState(exercises['upper-chest']);
    const [middleChest, setMiddleChest] = useState(exercises['middle-chest']);
    const [lowerChest, setLowerChest] = useState(exercises['lower-chest']);
    const [triceps1, setTriceps1] = useState(exercises['triceps1']);
    const [triceps2, setTriceps2] = useState(exercises['triceps2']);
    const [frontDelt, setFrontDelt] = useState(exercises['front-delt']);
    const [sideDelt, setSideDelt] = useState(exercises['side-delt']);

    const onClickVideoHandler = (e) => {
        const id = e.target.id;
        switch (id) {
            case 'up-chest':
                videoService(upperChest);
                break;
            case 'mid-chest':
                videoService(middleChest);
                break;
            case 'low-chest':
                videoService(lowerChest);
                break;
            case 'tri1':
                videoService(triceps1);
                break;
            case 'tri2':
                videoService(triceps2);
                break;
            case 'f-delt':
                videoService(frontDelt);
                break;
            case 's-delt':
                videoService(sideDelt);
                break;
            default:
                break;
        }
    };

    return (
        <section id="dashboard">
            <h2 className='card-title'>PUSH EXERCISES</h2>
            <ul className="push-card-wrapper">
                <li className="push-card">
                    <label htmlFor="upper-chest">UPPER CHEST</label>
                    <select name="upper-chest" id="upper-chest" value={upperChest} onChange={(e) => setUpperChest(e.target.value)}>
                        <option value="30°-incline-dumbbell-press">30° Incline Dumbbell Press</option>
                        <option value="low-to-high-cable-fly">Low To High Cable Fly</option>
                        <option value="incline-chest-press-machine">Incline Chest Press Machine</option>
                    </select>
                    <button type="button" id="up-chest" onClick={onClickVideoHandler}>How To Do It Properly</button>

                    <label htmlFor="middle-chest">MIDDLE CHEST</label>
                    <select name="middle-chest" id="middle-chest" value={middleChest} onChange={(e) => setMiddleChest(e.target.value)}>
                        <option value="barbell-bench-press">Barbell Bench Press</option>
                        <option value="standing-cable-fly">Standing Cable Fly</option>
                        <option value="pec-deck-machine">Pec Deck Machine</option>
                    </select>
                    <button type="button" id="mid-chest" onClick={onClickVideoHandler}>How To Do It Properly</button>

                    <label htmlFor="lower-chest">LOWER CHEST</label>
                    <select name="lower-chest" id="lower-chest" value={lowerChest} onChange={(e) => setLowerChest(e.target.value)}>
                        <option value="slight-decline-dumbbell-press">Slight Decline Dumbbell Press</option>
                        <option value="high-to-low-cable-fly">High To Low Cable Fly</option>
                        <option value="chest-dips">Chest Dips</option>
                    </select>
                    <button type="button" id="low-chest" onClick={onClickVideoHandler}>How To Do It Properly</button>
                </li>
                <li className="push-card">
                    <label htmlFor="triceps1">TRICEPS</label>
                    <select name="triceps1" id="triceps1" value={triceps1} onChange={(e) => setTriceps1(e.target.value)}>
                        <option value="lying-tricep-extension" disabled={triceps2 === 'lying-tricep-extension'}>Lying Tricep Extension</option>
                        <option value="incline-dumbbell-powerbombs" disabled={triceps2 === 'incline-dumbbell-powerbombs'}>Incline Dumbbell Powerbombs</option>
                        <option value="rocking-pushdowns" disabled={triceps2 === 'rocking-pushdowns'}>Rocking Pushdowns</option>
                        <option value="close-grip-bench-press" disabled={triceps2 === 'close-grip-bench-press'}>Close Grip Bench Press</option>
                        <option value="dumbbell-kickbacks" disabled={triceps2 === 'dumbbell-kickbacks'}>Dumbbell Kickbacks</option>
                    </select>
                    <button type="button" id="tri1" onClick={onClickVideoHandler}>How To Do It Properly</button>

                    <select name="triceps2" id="triceps2" value={triceps2} onChange={(e) => setTriceps2(e.target.value)}>
                        <option value="lying-tricep-extension" disabled={triceps1 === 'lying-tricep-extension'}>Lying Tricep Extension</option>
                        <option value="incline-dumbbell-powerbombs" disabled={triceps1 === 'incline-dumbbell-powerbombs'}>Incline Dumbbell Powerbombs</option>
                        <option value="rocking-pushdowns" disabled={triceps1 === 'rocking-pushdowns'}>Rocking Pushdowns</option>
                        <option value="close-grip-bench-press" disabled={triceps1 === 'close-grip-bench-press'}>Close Grip Bench Press</option>
                        <option value="dumbbell-kickbacks" disabled={triceps1 === 'dumbbell-kickbacks'}>Dumbbell Kickbacks</option>
                    </select>
                    <button type="button" id="tri2" onClick={onClickVideoHandler}>How To Do It Properly</button>
                </li>
                <li className="push-card">
                    <label htmlFor="front-delt">SHOULDER FRONT DELT</label>
                    <select name="front-delt" id="front-delt" value={frontDelt} onChange={(e) => setFrontDelt(e.target.value)}>
                        <option value="seated-dumbbell-shoulder-press">Seated Dumbbell Shoulder Press</option>
                        <option value="dumbbell-front-raises">Dumbbell Front Raises</option>
                        <option value="shoulder-press-machine">Shoulder Press Machine</option>
                    </select>
                    <button type="button" id="f-delt" onClick={onClickVideoHandler}>How To Do It Properly</button>

                    <label htmlFor="side-delt">SHOULDER SIDE DELT</label>
                    <select name="side-delt" id="side-delt" value={sideDelt} onChange={(e) => setSideDelt(e.target.value)}>
                        <option value="dumbbell-lateral-raise">Dumbbell Lateral Raise</option>
                        <option value="lying-incline-lateral-raise">Lying Incline Lateral Raise</option>
                        <option value="cable-lateral-raise">Cable Lateral Raise</option>
                    </select>
                    <button type="button" id="s-delt" onClick={onClickVideoHandler}>How To Do It Properly</button>
                </li>
            </ul>
        </section>
    );
};


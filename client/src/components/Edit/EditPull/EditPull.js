import { useState } from 'react';

import videoService from '../../../services/videoService';

export default function EditPull({ ...exercises }) {
    const [upperBack1, setUpperBack1] = useState(exercises['upper-back1']);
    const [upperBack2, setUpperBack2] = useState(exercises['upper-back2']);
    const [lats1, setLats1] = useState(exercises['lats1']);
    const [lats2, setLats2] = useState(exercises['lats2']);
    const [biceps1, setBiceps1] = useState(exercises['biceps1']);
    const [biceps2, setBiceps2] = useState(exercises['biceps2']);
    const [rearDelt, setRearDelt] = useState(exercises['rear-delt']);

    const onClickVideoHandler = (e) => {
        const id = e.target.id;
        switch (id) {
            case 'up-back1':
                videoService(upperBack1);
                break;
            case 'up-back2':
                videoService(upperBack2);
                break;
            case 'lat1':
                videoService(lats1);
                break;
            case 'lat2':
                videoService(lats2);
                break;
            case 'bicep1':
                videoService(biceps1);
                break;
            case 'bicep2':
                videoService(biceps2);
                break;
            case 'r-delt':
                videoService(rearDelt);
                break;
            default:
                break;
        }
    };

    return (
        <section id="dashboard">
                <h2 className='card-title'>PULL EXERCISES</h2>
                <ul className="push-card-wrapper">
                    <li className="push-card">
                        <label htmlFor="upper-back1">UPPER BACK</label>
                        <select name="upper-back1" id="upper-back1" value={upperBack1} onChange={(e) => setUpperBack1(e.target.value)}>
                            <option value="barbell-rows" disabled={upperBack2 === 'barbell-rows'}>Barbell Rows</option>
                            <option value="seated-rows" disabled={upperBack2 === 'seated-rows'}>Seated Rows</option>
                            <option value="meadows-rows" disabled={upperBack2 === 'meadows-rows'}>Meadows Rows</option>
                            <option value="chest-supported-dumbbell-rows" disabled={upperBack2 === 'chest-supported-dumbbell-rows'}>Chest Supported Dumbbell Rows</option>
                        </select>
                        <button type="button" id="up-back1" onClick={onClickVideoHandler}>How To Do It Properly</button>

                        <select name="upper-back2" id="upper-back2" value={upperBack2} onChange={(e) => setUpperBack2(e.target.value)}>
                            <option value="barbell-rows" disabled={upperBack1 === 'barbell-rows'}>Barbell Rows</option>
                            <option value="seated-rows" disabled={upperBack1 === 'seated-rows'}>Seated Rows</option>
                            <option value="meadows-rows" disabled={upperBack1 === 'meadows-rows'}>Meadows Rows</option>
                            <option value="chest-supported-dumbbell-rows" disabled={upperBack1 === 'chest-supported-dumbbell-rows'}>Chest Supported Dumbbell Rows</option>
                        </select>
                        <button type="button" id="up-back2" onClick={onClickVideoHandler}>How To Do It Properly</button>

                        <label htmlFor="lats1">LATS</label>
                        <select name="lats1" id="lats1" value={lats1} onChange={(e) => setLats1(e.target.value)}>
                            <option value="seated-rows-lats-focused" disabled={lats2 === 'seated-rows-lats-focused'}>Seated Rows Lats Focused</option>
                            <option value="chest-supported-dumbbell-lat-rows" disabled={lats2 === 'chest-supported-dumbbell-lat-rows'}>Chest Supported Dumbbell Lat Rows</option>
                            <option value="one-arm-cable-rows" disabled={lats2 === 'one-arm-cable-rows'}>One Arm Cable Rows</option>
                            <option value="lat-pulldowns" disabled={lats2 === 'lat-pulldowns'}>Lat Pulldowns</option>
                        </select>
                        <button type="button" id="lat1" onClick={onClickVideoHandler}>How To Do It Properly</button>

                        <select name="lats2" id="lats2" value={lats2} onChange={(e) => setLats2(e.target.value)}>
                            <option value="seated-rows-lats-focused" disabled={lats1 === 'seated-rows-lats-focused'}>Seated Rows Lats Focused</option>
                            <option value="chest-supported-dumbbell-lat-rows" disabled={lats1 === 'chest-supported-dumbbell-lat-rows'}>Chest Supported Dumbbell Lat Rows</option>
                            <option value="one-arm-cable-rows" disabled={lats1 === 'one-arm-cable-rows'}>One Arm Cable Rows</option>
                            <option value="lat-pulldowns" disabled={lats1 === 'lat-pulldowns'}>Lat Pulldowns</option>
                        </select>
                        <button type="button" id="lat2" onClick={onClickVideoHandler}>How To Do It Properly</button>
                    </li>
                    <li className="push-card">
                        <label htmlFor="biceps1">BICEPS</label>
                        <select name="biceps1" id="biceps1" value={biceps1} onChange={(e) => setBiceps1(e.target.value)}>
                            <option value="incline-dumbbell-curls" disabled={biceps2 === 'incline-dumbbell-curls'}>Incline Dumbbell Curls</option>
                            <option value="chinups" disabled={biceps2 === 'chinups'}>Chinups</option>
                            <option value="barbell-curls" disabled={biceps2 === 'barbell-curls'}>Barbell Curls</option>
                            <option value="alt.-standing-dumbbell-curls" disabled={biceps2 === 'alt.-standing-dumbbell-curls'}>Alt. Standing Dumbbell Curls</option>
                        </select>
                        <button type="button" id="bicep1" onClick={onClickVideoHandler}>How To Do It Properly</button>

                        <select name="biceps2" id="biceps2" value={biceps2} onChange={(e) => setBiceps2(e.target.value)}>
                            <option value="incline-dumbbell-curls" disabled={biceps1 === 'incline-dumbbell-curls'}>Incline Dumbbell Curls</option>
                            <option value="chinups" disabled={biceps1 === 'chinups'}>Chinups</option>
                            <option value="barbell-curls" disabled={biceps1 === 'barbell-curls'}>Barbell Curls</option>
                            <option value="alt.-standing-dumbbell-curls" disabled={biceps1 === 'alt.-standing-dumbbell-curls'}>Alt. Standing Dumbbell Curls</option>
                        </select>
                        <button type="button" id="bicep2" onClick={onClickVideoHandler}>How To Do It Properly</button>
                    </li>
                    <li className="push-card">
                        <label htmlFor="rear-delt">SHOULDER REAR DELT</label>
                        <select name="rear-delt" id="rear-delt" value={rearDelt} onChange={(e) => setRearDelt(e.target.value)}>
                            <option value="double-arm-reverse-cable-fly">Double Arm Reverse Cable Fly</option>
                            <option value="dumbbell-rear-delt-rows">Dumbbell Rear Delt Rows</option>
                            <option value="dumbbell-hip-huggers">Dumbbell Hip Huggers</option>
                            <option value="reverse-peck-deck-machine">Reverse Peck Deck Machine</option>
                        </select>
                        <button type="button" id="r-delt" onClick={onClickVideoHandler}>How To Do It Properly</button>
                    </li>
                </ul>
            </section>
    );
};


import { useState } from 'react';

export default function Push() {

    const generateHandler = (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.target));

        Object.values(values).includes('none') ? alert('All exercises must be selected') : console.log(values);
    };

    const [upperChest, setUpperChest] = useState('');
    const [middleChest, setMiddleChest] = useState('');
    const [lowerChest, setLowerChest] = useState('');
    const [triceps1, setTriceps1] = useState('');
    const [triceps2, setTriceps2] = useState('');
    const [frontDelt, setFrontDelt] = useState('');
    const [sideDelt, setSideDelt] = useState('');

    const onClickVideoHandler = (e) => {
        const id = e.target.id;

        switch (id) {
            case 'up-chest':
                upperChest ? console.log('video', upperChest) : alert('Not selected exercise!');
                break;
            case 'mid-chest':
                middleChest ? console.log('video', middleChest) : alert('Not selected exercise!');
                break;
            case 'low-chest':
                lowerChest ? console.log('video', lowerChest) : alert('Not selected exercise!');
                break;
            case 'tri1':
                triceps1 ? console.log('video', triceps1) : alert('Not selected exercise!');
                break;
            case 'tri2':
                triceps2 ? console.log('video', triceps2) : alert('Not selected exercise!');
                break;
            case 'f-delt':
                frontDelt ? console.log('video', frontDelt) : alert('Not selected exercise!');
                break;
            case 's-delt':
                sideDelt ? console.log('video', sideDelt) : alert('Not selected exercise!');
                break;
            default:
                break;
        }
    };

    return (
        <form onSubmit={generateHandler}>
            <section id="dashboard">
                <h2>PUSH EXERCISES</h2>
                <ul className="push-card-wrapper">
                    <li className="push-card">
                        <label htmlFor="upper-chest">UPPER CHEST</label>
                        <select name="upper-chest" id="upper-chest" value={upperChest} onChange={(e) => setUpperChest(e.target.value)}>
                            <option value="none" hidden>Select an Exercise</option>
                            <option value="30°-incline-dumbbell-press">30° Incline Dumbbell Press</option>
                            <option value="low-to-high-cable-fly">Low To High Cable Fly</option>
                            <option value="incline-chest-press-machine">Incline Chest Press Machine</option>
                        </select>
                        <button type="button" id="up-chest" onClick={onClickVideoHandler}>how to do it properly</button>

                        <label htmlFor="middle-chest">MIDDLE CHEST</label>
                        <select name="middle-chest" id="middle-chest" value={middleChest} onChange={(e) => setMiddleChest(e.target.value)}>
                            <option value="none" hidden>Select an Exercise</option>
                            <option value="barbell-bench-press">Barbell Bench Press</option>
                            <option value="standing-cable-fly">Standing Cable Fly</option>
                            <option value="pec-deck-machine">Pec Deck Machine</option>
                        </select>
                        <button type="button" id="mid-chest" onClick={onClickVideoHandler}>how to do it properly</button>

                        <label htmlFor="lower-chest">LOWER CHEST</label>
                        <select name="lower-chest" id="lower-chest" value={lowerChest} onChange={(e) => setLowerChest(e.target.value)}>
                            <option value="none" hidden>Select an Exercise</option>
                            <option value="slight-decline-dumbbell-press">Slight Decline Dumbbell Press</option>
                            <option value="high-to-low-cable-fly">Low To High Cable Fly</option>
                            <option value="chest-dips">Chest Dips</option>
                        </select>
                        <button type="button" id="low-chest" onClick={onClickVideoHandler}>how to do it properly</button>

                    </li>
                    <li className="push-card">
                        <label htmlFor="triceps1">TRICEPS</label>
                        <select name="triceps1" id="triceps1" value={triceps1} onChange={(e) => setTriceps1(e.target.value)}>
                            <option value="none" hidden>Select an Exercise</option>
                            <option value="lying-tricep-extension">Lying Tricep Extension</option>
                            <option value="incline-dumbbell-powerbombs">Incline Dumbbell Powerbombs</option>
                            <option value="rocking-pushdowns">Rocking Pushdowns</option>
                            <option value="close-grip-bench-press">Close Grip Bench Press</option>
                            <option value="dumbbell-kickbacks">Dumbbell Kickbacks</option>
                        </select>
                        <button type="button" id="tri1" onClick={onClickVideoHandler}>how to do it properly</button>

                        <label htmlFor="triceps2">TRICEPS</label>
                        <select name="triceps2" id="triceps2" value={triceps2} onChange={(e) => setTriceps2(e.target.value)}>
                            <option value="none" hidden>Select an Exercise</option>
                            <option value="lying-tricep-extension">Lying Tricep Extension</option>
                            <option value="incline-dumbbell-powerbombs">Incline Dumbbell Powerbombs</option>
                            <option value="rocking-pushdowns">Rocking Pushdowns</option>
                            <option value="close-grip-bench-press">Close Grip Bench Press</option>
                            <option value="dumbbell-kickbacks">Dumbbell Kickbacks</option>
                        </select>
                        <button type="button" id="tri2" onClick={onClickVideoHandler}>how to do it properly</button>

                    </li>
                    <li className="push-card">
                        <label htmlFor="front-delt">SHOULDER FRONT DELT</label>
                        <select name="front-delt" id="front-delt" value={frontDelt} onChange={(e) => setFrontDelt(e.target.value)}>
                            <option value="none" hidden>Select an Exercise</option>
                            <option value="seated-dumbbell-shoulder-press">Seated Dumbbell Shoulder Press</option>
                            <option value="dumbbell-front-raises">Dumbbell Front Raises</option>
                            <option value="shoulder-press-machine">Shoulder Press Machine</option>
                        </select>
                        <button type="button" id="f-delt" onClick={onClickVideoHandler}>how to do it properly</button>

                        <label htmlFor="side-delt">SHOULDER SIDE DELT</label>
                        <select name="side-delt" id="side-delt" value={sideDelt} onChange={(e) => setSideDelt(e.target.value)}>
                            <option value="none" hidden>Select an Exercise</option>
                            <option value="dumbbell-lateral-raise">Dumbbell Lateral Raise</option>
                            <option value="lying-incline-lateral-raise">Lying Incline Lateral Raise</option>
                            <option value="cable-lateral-raise">Cable Lateral Raise</option>
                        </select>
                        <button type="button" id="s-delt" onClick={onClickVideoHandler}>how to do it properly</button>
                    </li>
                </ul>

            </section>
            <button className="btn-generate">GENERATE</button>
        </form>
    );
}
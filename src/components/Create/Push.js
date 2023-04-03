

export default function Push() {
    return (<>
        <section id="dashboard">
            <h2>PUSH EXERCISES</h2>
            <ul className="push-card-wrapper">
                <li className="push-card">
                    <div>UPPER CHEST</div>
                    <select name="upper-chest" id="upper-chest">
                        <option value="none" selected disabled hidden>Select an Option</option>
                        <option value="30-degrees-db-press">30° Incline Dumbbell Press</option>
                        <option value="low-to-high-cable-fly">Low To High Cable Fly</option>
                        <option value="incline-machine">Incline Chest Press Machine</option>
                    </select>
                    <button>how to do it properly</button>

                    <div>MIDDLE CHEST</div>
                    <select name="middle-chest" id="middle-chest">
                        <option value="none" selected disabled hidden>Select an Option</option>
                        <option value="barbell-bench-press">Barbell Bench Press</option>
                        <option value="standing-cable-fly">Standing Cable Fly</option>
                        <option value="pec-deck-machine">Pec Deck Machine</option>
                    </select>
                    <button>how to do it properly</button>

                    <div>LOWER CHEST</div>
                    <select name="lower-chest" id="lower-chest">
                        <option value="none" selected disabled hidden>Select an Option</option>
                        <option value="decline-db-press">Slight Decline Dumbbell Press</option>
                        <option value="high-to-low-cable-fly">Low To High Cable Fly</option>
                        <option value="chest-dips">Chest Dips</option>
                    </select>
                    <button>how to do it properly</button>

                </li>
                <li className="push-card">
                    <div>TRICEPS</div>
                    <select name="triceps1" id="triceps1">
                        <option value="none" selected disabled hidden>Select an Option</option>
                        <option value="lying-tricep-extension">Lying Tricep Extension</option>
                        <option value="incline-db-powerbombs">Incline Dumbbell Powerbombs</option>
                        <option value="rocking-pushdowns">Rocking Pushdowns</option>
                        <option value="close-grip-bench-press">Close Grip Bench Press</option>
                        <option value="db-kickbacks">Dumbbell Kickbacks</option>
                    </select>
                    <button>how to do it properly</button>

                    <div>TRICEPS</div>
                    <select name="triceps2" id="triceps2">
                        <option value="none" selected disabled hidden>Select an Option</option>
                        <option value="lying-tricep-extension">Lying Tricep Extension</option>
                        <option value="incline-db-powerbombs">Incline Dumbbell Powerbombs</option>
                        <option value="rocking-pushdowns">Rocking Pushdowns</option>
                        <option value="close-grip-bench-press">Close Grip Bench Press</option>
                        <option value="db-kickbacks">Dumbbell Kickbacks</option>
                    </select>
                    <button>how to do it properly</button>

                </li>
                <li className="push-card">
                    <div>SHOULDER FRONT DELT</div>
                    <select name="front-delt" id="front-delt">
                        <option value="none" selected disabled hidden>Select an Option</option>
                        <option value="seated-db-shoulder-press">Seated Dumbbell Shoulder Press</option>
                        <option value="db-front-raises">Dumbbell Front Raises</option>
                        <option value="shoulder-press-machine">Shoulder Press Machine</option>
                    </select>
                    <button>how to do it properly</button>

                    <div>SHOULDER SIDE DELT</div>
                    <select name="side-delt" id="side-delt">
                        <option value="none" selected disabled hidden>Select an Option</option>
                        <option value="db-lateral-raise">Dumbbell Lateral Raise</option>
                        <option value="lying-incline-lateral-raise">Lying Incline Lateral Raise</option>
                        <option value="cable-lateral-raise">Cable Lateral Raise</option>
                    </select>
                    <button>how to do it properly</button>
                </li>
            </ul>

        </section>
        <button className="btn-generate">GENERATE</button>
    </>
    );
}


export default function Push() {
    return (
        <section id="dashboard">
            <h2>PUSH EXERCISES</h2>
            <ul className="push-card-wrapper">
                <li className="push-card">
                    <div>UPPER CHEST</div>
                    <label htmlFor="upper-chest">Choose 1 ex for upper chest</label>
                    <select name="upper-chest" id="upper-chest">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    <button>how to do it properly</button>

                    <div>MIDDLE CHEST</div>
                    <label htmlFor="middle-chest">Choose 1 ex for middle chest</label>
                    <select name="middle-chest" id="middle-chest">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    <button>how to do it properly</button>

                    <div>LOWER CHEST</div>
                    <label htmlFor="lower-chest">Choose 1 ex for lower chest</label>
                    <select name="lower-chest" id="lower-chest">
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    <button>how to do it properly</button>

                </li>
                <li className="push-card">
                    <div>TRICEPS 1</div>
                    <div>TRICEPS 2</div>

                </li>
                <li className="push-card">
                    <div>SHOULDERS</div>
                </li>
            </ul>
        </section>
    );
}
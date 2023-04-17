import capitalize from '../../../services/capitalize';

export default function ProfilePush({ ...exercises }) {
    return (
        <>
            <div id="info-wrapper">
                <p className='exercise'>
                    <strong>Upper Chest:</strong>
                    <span>{capitalize(exercises['upper-chest'])}</span>
                </p>
                <p className='exercise'>
                    <strong>Middle Chest:</strong>
                    <span>{capitalize(exercises['middle-chest'])}</span>
                </p>
                <p className='exercise'>
                    <strong>Lower Chest:</strong>
                    <span>{capitalize(exercises['lower-chest'])}</span>
                </p>
                <p className='exercise'>
                    <strong>Triceps:</strong>
                    <span>{capitalize(exercises['triceps1'])}</span> <br />
                    <span>{capitalize(exercises['triceps2'])}</span>
                </p>
                <p className='exercise'>
                    <strong>Front Delt:</strong>
                    <span>{capitalize(exercises['front-delt'])}</span>
                </p>
                <p className='exercise'>
                    <strong>Side Delt:</strong>
                    <span>{capitalize(exercises['side-delt'])}</span>
                </p>
            </div>
        </>
    );
};
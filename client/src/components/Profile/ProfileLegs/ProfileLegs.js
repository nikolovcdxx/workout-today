import capitalize from '../../../services/capitalize';

export default function ProfileLegs({ ...exercises }) {
    return (
        <>
            <div id="info-wrapper">
                <p className='exercise'>
                    <strong>Quadriceps:</strong>
                    <span>{capitalize(exercises['quadriceps1'])}</span><br />
                    <span>{capitalize(exercises['quadriceps2'])}</span>
                </p>
                <p className='exercise'>
                    <strong>Hamstrings:</strong>
                    <span>{capitalize(exercises['hamstrings'])}</span>
                </p>
                <p className='exercise'>
                    <strong>Glutes:</strong>
                    <span>{capitalize(exercises['glutes1'])}</span><br />
                    <span>{capitalize(exercises['glutes2'])}</span>
                </p>
                <p className='exercise'>
                    <strong>Calves:</strong>
                    <span>{capitalize(exercises['calves'])}</span>
                </p>
            </div>
        </>
    );
};
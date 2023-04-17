import capitalize from '../../../services/capitalize';

export default function DetailsPull({ ...exercises }) {
    return (
        <>
            <div id="info-wrapper">
                <p className='exercise'>
                    <strong>Upper Back:</strong>
                    <span>{capitalize(exercises['upper-back1'])}</span><br />
                    <span>{capitalize(exercises['upper-back2'])}</span>
                </p>
                <p className='exercise'>
                    <strong>Lats:</strong>
                    <span>{capitalize(exercises['lats1'])}</span><br />
                    <span>{capitalize(exercises['lats2'])}</span>
                </p>
                <p className='exercise'>
                    <strong>Biceps:</strong>
                    <span>{capitalize(exercises['biceps1'])}</span><br />
                    <span>{capitalize(exercises['biceps2'])}</span>
                </p>
                <p className='exercise'>
                    <strong>Rear Delt:</strong>
                    <span>{capitalize(exercises['rear-delt'])}</span>
                </p>
            </div>
            <div id="likes">
                Likes: <span id="likes-count">0</span>
            </div>
        </>
    );
};
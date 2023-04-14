export default function DetailsLegs({...exercises }) {
    console.log(exercises);

    return (
        <>
            <div id="info-wrapper">
                <p>
                    <strong>Band:</strong>
                    <span id="details-singer">AC/DC</span>
                </p>
                <p>
                    <strong>Album name:</strong>
                    <span id="details-album">Back in Black</span>
                </p>
                <p>
                    <strong>Release date:</strong>
                    <span id="details-release">1980</span>
                </p>
                <p>
                    <strong>Label:</strong>
                    <span id="details-label">Epic</span>
                </p>
                <p>
                    <strong>Sales:</strong>
                    <span id="details-sales">26 million (50 million claimed)</span>
                </p>
            </div>
            <div id="likes">
                Likes: <span id="likes-count">0</span>
            </div>
        </>
    );
};
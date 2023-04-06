

export default function Catalog() {

    return (
        <section id="catalog-section" className="spaced">
            <h1 className="item">Workouts</h1>
            <ul className="catalog cards">
                <li className="item">
                    <header className="pad-med">
                        <h2>Fishing Boat</h2>
                    </header>
                    <div className="align-center">
                        <img className="img-thumb" src="/pull-day-exercises.jpg" alt=""/>
                    </div>
                    <footer className="align-center pad-med">
                        <p>
                            Current price: <strong>$5000</strong>
                        </p>
                        <a className="action" href="/">
                            See details
                        </a>
                    </footer>
                </li>
                <li className="item">
                    <header className="pad-med">
                        <h2>Wardrobe</h2>
                    </header>
                    <div className="align-center">
                        <img className="img-thumb" src="/pull-day-exercises.jpg" alt=""/>
                    </div>
                    <footer className="align-center pad-med">
                        <p>
                            Current price: <strong>$150</strong>
                        </p>
                        <a className="action" href="/">
                            See details
                        </a>
                    </footer>
                </li>
                <li className="item">
                    <header className="pad-med">
                        <h2>Record Player</h2>
                    </header>
                    <div className="align-center">
                        <img className="img-thumb" src="/pull-day-exercises.jpg" alt=""/>
                    </div>
                    <footer className="align-center pad-med">
                        <p>
                            Current price: <strong>$400</strong>
                        </p>
                        <a className="action" href="/">
                            See details
                        </a>
                    </footer>
                </li>
            </ul>
            {/* If there are no auctions to display */}
            <div className="item pad-large align-center">
                <p>Nothing has been listed yet. Be the first!</p>
                <div>
                    <a className="action" href="/">
                        Publish Auction
                    </a>
                </div>
            </div>
        </section>
    );
};
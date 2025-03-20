import marker from './assets/marker.png';
import japan from './assets/japan.jpeg';
import australia from './assets/australia.jpeg';
import norway from './assets/norway.jpeg';

function Entry() {
    return (
        <>
            <article className="journal-entry">
                <img src={japan} alt="Japan"/>
                <div className="article-text">
                    <div className="article-text-location">
                        <div className="article-location">
                            <img src={marker} alt="Marker"/>
                            <h3>Japan</h3>
                        </div>
                        <a href="https://maps.app.goo.gl/Fg7kmY8tmekjH5As9"
                           target="_blank">
                            View on Google Maps
                        </a>
                    </div>

                    <div className="article-text-content">
                        <h2>Mount Fuji</h2>

                        <div className="article-text-description">
                            <h4>12 Jan, 2023 - 24 Jan, 2023</h4>
                            <p>
                                Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet).
                                Mount Fuji
                                is
                                the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                            </p>
                        </div>
                    </div>
                </div>
            </article>

            <article className="journal-entry">
                <img src={australia} alt="australia"/>
                <div className="article-text">
                    <div className="article-text-location">
                        <div className="article-location">
                            <img src={marker} alt="Marker"/>
                            <h3>AUSTRALIA</h3>
                        </div>
                        <a href="https://maps.app.goo.gl/X1881NKdJMPkMECe8" target="_blank">View on Google Maps</a>
                    </div>

                    <div className="article-text-content">
                        <h2>Sydney Opera House</h2>

                        <div className="article-text-description">
                            <h4>27 May, 2023 - 8 Jun, 2023</h4>
                            <p>
                                The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the
                                banks of the Sydney Harbour, it is often regarded as one of the 20th century's most
                                famous and distinctive buildings.
                            </p>
                        </div>
                    </div>
                </div>
            </article>

            <article className="journal-entry">
                <img src={norway} alt="norway"/>
                <div className="article-text">
                    <div className="article-text-location">
                        <div className="article-location">
                            <img src={marker} alt="Marker"/>
                            <h3>NORWAY</h3>
                        </div>
                        <a href="https://maps.app.goo.gl/5eaXn5f5cV7p88MK7" target="_blank">View on Google Maps</a>
                    </div>

                    <div className="article-text-content">
                        <h2>Geirangerfjord</h2>

                        <div className="article-text-description">
                            <h4>01 Oct, 2024 - 18 Nov, 2024</h4>
                            <p>
                                The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway.
                                It is located entirely in the Stranda Municipality.
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}

export default Entry;
import globe from '../assets/globe.png';

function TravelHeader() {
    return (
        <header>
            <img src={globe} alt="globe"/>
            <h1>My Travel Journal</h1>
        </header>
    );
}

export default TravelHeader;
import reactLogo from "./assets/react.svg";
import './style.css';

function Mardown() {
    return (
        <>
            <header>
                <img src={reactLogo} alt="React Logo" width="80" height="80"/>
            </header>
            <main>
                <h1>Reasons I'm excited to learn React</h1>
                <ol>
                    <li>Declarative</li>
                    <li>Component-Based</li>
                    <li>Learn Once, Write Anywhere</li>
                </ol>
            </main>
            <footer>
                <small>© 2025 afssas development. All rights reserved.</small>
            </footer>
        </>
    );
}

export default Mardown;
import React from 'react';
import reactLogo from "./assets/react.svg";

function MarkdownHeader(props) {
    return (
        <header className="header">
            <img className="header-img" src={reactLogo} alt="React Logo"/>
            <nav>
                <ul className="nav-list">
                    <li className="nav-list-item">Pricing</li>
                    <li className="nav-list-item">About</li>
                    <li className="nav-list-item">Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default MarkdownHeader;
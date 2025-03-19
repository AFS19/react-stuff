import React from 'react';

function MarkdownMain(props) {
    return (
        <main className="main">
            <h1>Reasons I'm excited to learn React</h1>
            <ol className="main-list">
                <li className="main-list-item">Declarative</li>
                <li className="main-list-item">Component-Based</li>
                <li className="main-list-item">Learn Once, Write Anywhere</li>
            </ol>
        </main>
    );
}

export default MarkdownMain;
import React from 'react';

function Main(props) {
    return (
        <main className='fanfacts-main'>
            <h1 className='fanfacts-main-h1'>Fun facts about React</h1>

            <ul className='fanfacts-main-list'>
                <li className='fanfacts-main-list-item'>Was first released in 2013</li>
                <li className='fanfacts-main-list-item'>Was originally created by Jordan Walke</li>
                <li className='fanfacts-main-list-item'>Has well over 100K stars on GitHub</li>
                <li className='fanfacts-main-list-item'>Is maintained by Meta</li>
                <li className='fanfacts-main-list-item'>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    );
}

export default Main;
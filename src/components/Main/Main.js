import React from 'react';
import Description from '../Description/Description.js';
import LogoApp from '../Logo/LogoApp.js';

function Main() {
    return (
        <div className="container">
            <div className='title'>
                <Description />
            </div>
            <LogoApp />
        </div>
    );
}

export default Main;

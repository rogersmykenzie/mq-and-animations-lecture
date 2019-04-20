import React from 'react';
import '../styles/Nav.css'

export default (props) => {
    return (
        <header className='header-main'>
            <div className='header-content'>
                <h1 className='website-title'>
                    Mykenzie's Bagel Palace
                </h1>
                <ul>
                    <li>
                        Shop
                    </li>
                    <li>
                        Nutrition
                    </li>
                    <li>
                        Log in
                    </li>
                </ul>
            </div>
        </header>
    )
}
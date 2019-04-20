import React from 'react';
import '../styles/Bagel.css';

export default (props) => {
    return (
        <div className='bagel-card-container'>
            <h1 className='bagel-name'>{props.name}</h1>
            <img className='bagel-img' src={props.img} alt={'Nifty Bagel Goes Here'} />
            <button className='bagel-button'>Purchase Now</button>
        </div>
    )
}
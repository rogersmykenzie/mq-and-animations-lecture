import React from 'react';
import '../styles/Home.css'
import Bagel from './Bagel';

export default class Home extends React.Component {
    state = {
        bagels: [
            {
                name: "Normal Bagel",
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Bagel-Plain-Alt.jpg/1200px-Bagel-Plain-Alt.jpg"
            },
            {
                name: "Mini Bagel",
                url: "https://static.wixstatic.com/media/5dde65_5a8dd5f08a564da38b37738994325927~mv2.jpeg/v1/fit/w_498,h_344,q_90/file.jpg"
            },
            {
                name: "Whole Wheat Bagel",
                url: "https://cutpcdnwimages.azureedge.net/images/products/90000/094320-600x600-A.jpg"
            },
            {
                name: "Bagel Sandwich",
                url: "https://www.williams-sonoma.com/wsimgs/rk/images/dp/recipe/201851/0034/img68l.jpg"
            },
            {
                name: "Burnt Bagel",
                url: "https://rayallychina.files.wordpress.com/2012/09/aug27_burnt_bagels2.jpg"
            }
        ]
    }
    render() {
        return (
            <div className='home-container'>
                {this.state.bagels.map(bagel => {
                    return <Bagel name={bagel.name} img={bagel.url} />
                })}
            </div>
        )
    }
}
import React from 'react'
import { color } from '../../../config/color'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider-animations.css';

const content = [
    {
        title: 'Bagan',
        description:
            'Connecting World Travellers to The Golden Land',
        image: require('../../../assets/img/bagan.jpg'),
        user: 'Luan Gjokaj',
        userProfile: 'https://i.imgur.com/JSW6mEk.png'
    },
    {
        title: 'Innlay',
        description:
            'Celebrating Temple City Bagan being awarded UNESCO World Heritage Site status',
        image: require('../../../assets/img/innlay.jpg'),
        user: 'Erich Behrens',
        userProfile: 'https://i.imgur.com/0Clfnu7.png'
    },
    {
        title: 'Kalaw',
        description:
            'Connecting World Travellers to The Golden Land',
        image: require('../../../assets/img/kalaw.jpg'),
        user: 'Bruno Vizovskyy',
        userProfile: 'https://i.imgur.com/4KeKvtH.png'
    }
];

const slider = () => {
    return (
        <div>
            <Slider className="slider-wrapper" autoplay={3000}>
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <p className="slide-text">{item.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default slider
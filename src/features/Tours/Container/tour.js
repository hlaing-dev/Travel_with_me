import React from 'react'
import { color } from '../../../config/color'
import MainImage from '../../Common/MainImageContainer'
import place from '../../../assets/img/destination/bagan.jpg'
import TourPackage from '../tour_packages'

const tourArr = [
    {
        id: "1",
        planName: "Advanture",
        price: 700,
        promotionPrice: 650,
        superbRating: "8.0",
        description: "Welcome from Advanture",
        duration: "10",
        availablePerson: "12",
        image: require('../../../assets/img/homegallery/p1.jpg'),
        destination: 'Mandalay'
    },
    {
        id: "2",
        planName: "Super Trip",
        price: 750,
        promotionPrice: 0,
        superbRating: "9.0",
        description: "Welcome from Super Trip",
        duration: "10",
        availablePerson: "12",
        image: require('../../../assets/img/homegallery/p2.jpg'),
        destination: 'Yangon'
    },
    {
        id: "3",
        planName: "Paradise",
        price: 850,
        promotionPrice: 750,
        superbRating: "9.5",
        description: "Welcome from Paradise",
        duration: "10",
        availablePerson: "12",
        image: require('../../../assets/img/homegallery/p3.jpg'),
        destination: 'Pyinoolwim'
    },
    {
        id: "4",
        planName: "Go Pagoda",
        price: 670,
        promotionPrice: 0,
        superbRating: "9.0",
        description: "Welcome from Go Pagoda",
        duration: "10",
        availablePerson: "12",
        image: require('../../../assets/img/homegallery/p4.jpg'),
        destination: 'Taung Gyi'
    },
    {
        id: "5",
        planName: "Best Beach Ever",
        price: 1000,
        promotionPrice:950,
        superbRating: "8.9",
        description: "Welcome from Best Beach Ever",
        duration: "10",
        availablePerson: "12",
        image: require('../../../assets/img/homegallery/p5.jpg'),
        destination: 'Kalaw'
    },
    {
        id: "6",
        planName: "Ancient Place Collection",
        price: 900,
        promotionPrice: 0,
        superbRating: "9.9",
        description: "Welcome from Ancient Place Collection",
        duration: "10",
        availablePerson: "12",
        image: require('../../../assets/img/homegallery/p6.jpg'),
        destination: 'Kyaukse'
    },
];


const tours = () => {
    return (
        <div>
            <MainImage mainImage={place} text="BEST SELLING TOURS"></MainImage>
            <TourPackage tourArr={tourArr}></TourPackage>
        </div>
    )
}

export default tours

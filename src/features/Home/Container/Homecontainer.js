import React from 'react'
import { color } from '../../../config/color'
import Slider from '../Slider/slider'
import Subbar from '../../Common/Subbar'
import HomeGallery from '../Homegallery/homegallery'
import Tourpackage from '../../Tours/tour_packages'

const subtext=[
	{
		text: 'Where to?',
		type: '',
		bgcolor: "#e4ded4",
		textcolor: "#444444",
		icon: require('../../../assets/png/place.png')
	},
	{
		text: 'Month',
		type: '',
		bgcolor: "#e4ded4",
		textcolor: "#444444",
		icon: require('../../../assets/png/date.png')
	},
	{
		text: 'Travel Type',
		type: '',
		bgcolor: "#e4ded4",
		textcolor: "#444444",
		icon: require('../../../assets/png/travel.png')
	},
	{
		icon: '',
		text: 'Find Now',
		type: '',
		bgcolor: "#e83629e6",
		textcolor: "white"
	}
]


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
    }
];

const Homecontainer = () => {
	return (
		<div>
			<Slider></Slider>
			<Subbar item={subtext}></Subbar>
			<Tourpackage tourArr={tourArr} margin="autoMargin"></Tourpackage>
			<HomeGallery></HomeGallery>
		</div>
	)
}

export default Homecontainer
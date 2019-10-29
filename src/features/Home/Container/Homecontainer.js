import React from 'react'
import { color } from '../../../config/color'
import Slider from '../Slider/slider'
import Subbar from '../../Common/Subbar'
import HomeGallery from '../Homegallery/homegallery'

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
const Homecontainer = () => {
	return (
		<div>
			<Slider></Slider>
			<Subbar item={subtext}></Subbar>
			<HomeGallery></HomeGallery>
		</div>
	)
}

export default Homecontainer
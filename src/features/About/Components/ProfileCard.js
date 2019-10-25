import React from 'react'
import { color } from '../../../config/color'
import Profile1 from '../../../assets/img/img2.jpg'
//import Profile2 from '../../../assets/img/aboutImg/profile2.jpeg'

const ProfileCard = props => {
    const {text, subText} = props
    return (
            <div style={{ width: '100%', height: 500, backgroundColor: color.card, borderRadius: 5 }}>
                 
                <img src={Profile1} alt='profile1' style={{width: 300, height: 300}} />
                <div className="text-center">
                    {text}
                </div>
                <div className="text-center">
                    {subText}
                </div> 
            </div>
    )
}
export default ProfileCard;
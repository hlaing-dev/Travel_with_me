import React from 'react'
import { Link } from 'react-router-dom'
import { color } from '../../../config/color'
import Team1 from '../../../assets/img/team-1.jpg'
import Team2 from '../../../assets/img/team-2.jpg'
import Team3 from '../../../assets/img/team-3.jpg'
import Team4 from '../../../assets/img/team-4.jpg'
import Facebook from '../../../assets/img/facebook.png'
import Instagram from '../../../assets/img/instagram.png'
import Skype from '../../../assets/img/twitter.png'

const ProfileCard = props => {
    const { text, subText } = props
    return (
        <div className='row'>
            <div className='col-lg-3'
                style={{ width: '100%', height: '100%', backgroundColor: color.card, borderRadius: 5 }}>

                <img src={Team1} alt='team1' style={{ width: '100%', height: '100%' }} />
                <div className="text-center">
                    BRYAN WILLIAMS
                </div>
                <div className="text-center">
                    Travel Agent
                </div>
                <div>
                    <a href="https://www.facebook.com"><img alt="" src={Facebook} style={{ width: '30px', height: '30px' }} /></a>
                    <a href="https://www.instagram.com/"><img alt="" src={Instagram} style={{ width: '30px', height: '30px' }} /></a>
                    <a href="https://twitter.com/"> <img alt="" src={Skype} style={{ width: '30px', height: '30px' }} /></a>
                </div>
            </div>
            <div className='col-lg-3'
                style={{ width: '100%', height: '100%', backgroundColor: color.card, borderRadius: 5 }}>
                <img src={Team2} alt='team2' style={{ width: '100%', height: '100%' }} />
                <div className="text-center">
                    BRYAN WILLIAMS
                </div>
                <div className="text-center">
                    Travel Agent
                </div>
                <div>
                    <a href="https://www.facebook.com"><img src={Facebook} style={{ width: '30px', height: '30px' }} /></a>
                    <a href="https://www.instagram.com/"><img src={Instagram} style={{ width: '30px', height: '30px' }} /></a>
                    <a href="https://twitter.com/"> <img src={Skype} style={{ width: '30px', height: '30px' }} /></a>
                </div>
            </div>
            <div className='col-lg-3'
                style={{ width: '100%', height: '100%', backgroundColor: color.card, borderRadius: 5 }}>
                <img src={Team3} alt='team3' style={{ width: '100%', height: '100%' }} />
                <div className="text-center">
                    BRYAN WILLIAMS
                </div>
                <div className="text-center">
                    Travel Agent
                </div>
                <div>
                    <a href="https://www.facebook.com"><img src={Facebook} style={{ width: '30px', height: '30px' }} /></a>
                    <a href="https://www.instagram.com/"><img src={Instagram} style={{ width: '30px', height: '30px' }} /></a>
                    <a href="https://twitter.com/"> <img src={Skype} style={{ width: '30px', height: '30px' }} /></a>
                </div>
            </div>
            <div className='col-lg-3'
                style={{ width: '100%', height: '100%', backgroundColor: color.card, borderRadius: 5 }}>

                <img src={Team4} alt='team4' style={{ width: '100%', height: '100%' }} />
                <div className="text-center">
                    BRYAN WILLIAMS
                </div>
                <div className="text-center">
                    Travel Agent
                </div>
                <div>
                    <a href="https://www.facebook.com"><img src={Facebook} style={{ width: '30px', height: '30px' }} /></a>
                    <a href="https://www.instagram.com/"><img src={Instagram} style={{ width: '30px', height: '30px' }} /></a>
                    <a href="https://twitter.com/"> <img src={Skype} style={{ width: '30px', height: '30px' }} /></a>
                </div>
            </div>
        </div>
    )
}
export default ProfileCard
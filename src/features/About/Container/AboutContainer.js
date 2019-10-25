import React from 'react'
import AboutImg from '../../../assets/img/img3.jpg'
import TopView from '../../Common/MainImageContainer'
import ProfileCard from '../Components/ProfileCard'
const AboutContainer = props => {
    return (
        <div className="container-fluid">
            <div className="row">
                <TopView mainImage={AboutImg} text={"ABOUT"}/>
            </div>
            <div class="container">
            <div class="row">
                <div class="col-sm">
                <ProfileCard  text={"ko kyaw khant"} 
                subText={"djfkjeifjioefjio"}/>
                </div>
                <div class="col-sm">
                    <ProfileCard />
                </div>
                <div class="col-sm">
                    Map
                </div>
            </div>
            </div>
        </div>
    )
}
export default AboutContainer
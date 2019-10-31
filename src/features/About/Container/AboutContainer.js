import React from 'react'
import AboutImg from '../../../assets/img/img3.jpg'
import TopView from '../../Common/MainImageContainer'
import ProfileCard from '../Components/ProfileCard'
import YouTubeVideo from '../Components/YouTubeVideo'
import Team1 from '../Components/ProfileCard'
import ProfileList from '../Components/ProfileCard'

const ProfileCardArray=[
    {
        image: require('../../../assets/img/team-1.jpg'),
        name:"BRYAN WILLIAMS",
        agent:"Travel Agent"
       
    },
    {
        image: require('../../../assets/img/team-2.jpg'),
        name:"DORIS HUGHES",
        agent:"Travel Agent"
    },
    {
        image: require('../../../assets/img/team-3.jpg'),
        name:"AUSTIN GRIFFIN",
        agent:"Travel Agent"
    },
    {
        image: require('../../../assets/img/team-4.jpg'),
        name:"JANICE VALDEZ",
        agent:"Travel Agent"
    },

];
const AboutContainer = props => {
    return (
        <div>
                <TopView mainImage={AboutImg} text={"ABOUT US"}/>
            <div class="container pt-5">
            <div class="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                {/* <ProfileCard  text={"ko kyaw khant"} 
                subText={"djfkjeifjioefjio"}/> */}
                <YouTubeVideo/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                    <h3>WHAT WE DO</h3>
                    <p>Lorem ipsum dolor sit amet, atqui gubergren eu sea, usu numquam iudicabit an, sed et doming mnesarchum. Zril graeci sadipscing qui ex.</p>
                    <p>Lorem ipsum dolor sit amet, atqui gubergren eu sea, usu numquam iudicabit an, sed et doming mnesarchum. Zril graeci sadipscing qui ex, vim ea malorum definiebas disputationi, et singulis contentiones ius. Id mei stet iracundia, est in suscipiantur intellegebat, te impedit vulputate vel.</p> 
                </div>
            </div>
                <div className="text-center pt-5">
                    <h1>Our Team</h1>
                     <p>No vis fastidii accumsan, ignota postulant ea mea. Vis et prima integre, ei vis ridens moderatius reformidans cu vim doctus accumsan.</p>
                    <ProfileList profile={ProfileCardArray}/>
                </div>
            </div>
        </div>
    )
}
export default AboutContainer
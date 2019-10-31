import React from 'react'
import SubNavbar from '../Components/SubNavTour'
import MainImage from '../../Common/MainImageContainer'
import BookingForm from '../../Tours/Components/BookingForm'
import place from '../../../assets/img/destination/bagan.jpg'
const TourDetailContainer = () => {
    return (
        <div>
            <MainImage mainImage={place} text="BEST SELLING TOURS"></MainImage>
            <div className="container">
                <div className="row pt-5">
                    <div className="col-9">
                        <SubNavbar />
                        
                    </div>
                    <div className="col-3">
                        <BookingForm />
                    </div>

                </div>
                <div className="row">
                    This is it
                </div>
            </div>

        </div>
    )
}

export default TourDetailContainer
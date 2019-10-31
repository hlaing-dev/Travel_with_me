import React from 'react'
import backgroundImage from '../../../assets/img/homegallery/p3.jpg'
import color from '../../../config/color'


const BookingForm = () => {
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, height: 500 }}>
            <form>
                <div className="input-group p-2">
                    <input type="text" class="form-control" placeholder="Name*" />
                    <div className="input-group-append">
                        <span className="input-group-text"><i className="fa fa-user"></i></span>
                    </div>
                </div>
                <div className="input-group p-2">
                    <input type="text" className="form-control" placeholder="Email*" />
                    <div className="input-group-append">
                        <span className="input-group-text"><i className="fa fa-envelope"></i></span>
                    </div>
                </div>
                <div className="input-group p-2">
                    <input type="text" class="form-control" placeholder="Confirm Email*" />
                    <div className="input-group-append">
                        <span className="input-group-text"><i className="fa fa-envelope"></i></span>
                    </div>
                </div>
                <div className="input-group p-2">
                    <input type="text" class="form-control" placeholder="Phone" />
                    <div className="input-group-append">
                        <span className="input-group-text"><i className="fa fa-phone"></i></span>
                    </div>
                </div>
                <div className="input-group p-2">
                    <textarea rows="4" cols="30" placeholder="Message *" className="p-2" />
                </div>
                <div>
                    <button type="submit">Book</button>
                </div>

            </form>
        </div>
    )

}
export default BookingForm
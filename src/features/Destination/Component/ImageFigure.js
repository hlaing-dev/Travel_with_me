import React from 'react';

export const Figure = (props) => {
    const { imagePath, imageName } = props
    return (
        <figure className="des-img-hover-zoom img-fluid">
            <img style={{height: "23vh"}} alt="" src={require('../../../assets/img/destination/' + imagePath)} />
            <div className="text text-truncate">{imageName}</div>
        </figure>


    )
}
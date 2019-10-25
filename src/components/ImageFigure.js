import React from 'react';

export const Figure = (props) => {
    const { imagePath, imageName } = props
    return (
        <figure>
            <img alt="picture" className="img-fluid" src={require('../assets/img/destination/' + imagePath)} style={{ height: 150, width: 250 }} />
            <div className="text text-truncate">{imageName}</div>
        </figure>


    )
}

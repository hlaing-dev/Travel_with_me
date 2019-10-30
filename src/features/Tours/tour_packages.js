import React from 'react'

function tour_packages(props) {
    const { tourArr } = props;
    console.log('TourArr is=>', tourArr);
    return (
        <div>
            <div className="row">
                {tourArr.map((item, index) => (
                    <div
                        key={index}
                        className="col-lg-4 col-md-4 col-sm-6"
                    >
                        <div style={{margin: "20px", height: "500px", width: "370px"}}>
                        <img src={item.image} alt="" style={{ width: "370px", height: "250px" }}></img>
                        <div style={{overflow: "hidden", height: "200px"}}>
                            <p>{item.planName}</p>
                            <p>{item.description}</p>
                        </div>
                        <div style={{backgroundColor: "#2196F3", height: "60px"}}>
                            footer
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default tour_packages


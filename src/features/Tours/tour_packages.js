import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';

const Tour_packages = (props) => {
    const { tourArr } = props;
    const goDetail = (id) => {
        props.history.replace(`tour/${id}`)
    }
    const margin = props.margin ? `row ${props.margin}` : "row m20-auto" ;
    return (
        <div>
            <div className={margin} style={{ width: "100%", padding: "15px" }}>
                {tourArr.map((item, index) => (
                    <div onClick={() => goDetail(item.id)}
                        key={index}
                        className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{ padding: "30px 0px" }}
                    >
                        <div style={{ height: "500px", maxWidth: "430px", minWidth: "300px", padding: "0px 20px", margin: "auto" }}>
                            <div className="shadow">
                                <img src={item.image} alt="" style={{ width: "100%", height: "250px" }}></img>
                                <div style={{ overflow: "hidden", height: "170px", padding: "20px" }}>
                                    <div>
                                        <h4 className="float-left">{item.planName}</h4>
                                        <div className="float-right">
                                            {
                                                item.promotionPrice === 0 ? <p className="d-inline" style={{ color: "red", fontSize: "20px" }}>${item.price}</p> :
                                                    <p className="d-inline mr-20" style={{ textDecoration: "line-through", color: "gray" }}>${item.price}</p>
                                            }
                                            {
                                                item.promotionPrice !== 0 ? <p className="d-inline" style={{ color: "red", fontSize: "20px" }}>${item.promotionPrice}</p> : ''
                                            }
                                        </div>
                                    </div>
                                    <div style={{ clear: "both", color: "gray" }}>
                                        <p>{item.superbRating} Superb</p>
                                    </div>
                                    <div>
                                        <p style={{ color: "gray" }}>{item.description}</p>
                                    </div>
                                </div>
                                <div style={{ backgroundColor: "#2196F3", height: "60px", color: "white", padding: "18px" }}>
                                    <div className="float-left  pr-2">
                                        <i className="fa fa-clock-o pr-2"></i>{item.duration}
                                    </div>
                                    <div className="float-left  pr-2">
                                        <i className="fa fa-user pr-2"></i>{item.availablePerson}
                                    </div>
                                    <div>
                                        <i className="fa fa-map-marker pr-2"></i>{item.destination}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default withRouter(Tour_packages)


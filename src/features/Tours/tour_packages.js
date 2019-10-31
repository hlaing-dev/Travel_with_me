import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';

const Tour_packages = (props) => {
    const { tourArr } = props;
    const goDetail = (id) => {
        props.history.replace(`tour/${id}`)
    }
    return (
        <div>
            <div className="row" style={{ margin: "20px auto", width: "100%", padding: "15px" }}>
                {tourArr.map((item, index) => (
                    <div onClick={() => goDetail(item.id)}
                        key={index}
                        className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{ padding: "30px 0px" }}
                    >
                        <div style={{ height: "500px", maxWidth: "380px", minWidth: "300px", padding: "0px 20px", margin: "auto" }}>
                            <img src={item.image} alt="" style={{ width: "100%", height: "250px" }}></img>
                            <div style={{ overflow: "hidden", height: "170px" }}>
                                <div>
                                    <h4 className="float-left">{item.planName}</h4>
                                    <div className="float-right">
                                        {
                                            item.promotionPrice === 0 ? <p className="d-inline mr-20" style={{ color: "red", fontSize: "20px" }}><stroke>${item.price}</stroke></p> :
                                                <p className="d-inline mr-20" style={{ textDecoration: "line-through", color: "gray" }}>${item.price}</p>
                                        }
                                        {
                                            item.promotionPrice !== 0 ? <p className="d-inline mr-20" style={{ color: "red", fontSize: "20px" }}>${item.promotionPrice}</p> : ''
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
                            <div style={{ backgroundColor: "#2196F3", height: "60px", color: "white" }}>
                                <div className="float-left">
                                    <i class="fa fa-clock"></i>{item.duration}
                                </div>
                                <div>
                                    <i class="fa fa-user-check"></i>{item.availablePerson}
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


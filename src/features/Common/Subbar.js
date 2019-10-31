import React from 'react'

const Subbar = (props) => {
    const itemArr = props.item;
    console.log('itemArr is=>', itemArr);
    console.log("type of item is=>", typeof (itemArr));
    return (
        <div>
            <div style={{
                backgroundColor: "#ffffff",
                width: "80%",
                boxShadow: "0px 1px 4px 2px #9E9E9E",
                margin: "-60px 0px 0px 10%",
                position: "absolute"
            }}>
                <div className="row" style={{ marginLeft: "17px" }}>
                    {itemArr.map((item, index) => (
                        <div className="col-lg-3 col-md-6 col-sm-6 cols-xs-12" key={index}>
                            <div style={{
                                background: item.bgcolor,
                                color: item.textcolor,
                                padding: "20px",
                                width: "90%",
                                float: "left",
                                marginTop: "30px",
                                marginBottom: "30px"
                            }}
                            >
                                <img src={item.icon}
                                    style={{ width: "25px", marginRight: "20px" }} alt=""></img>{item.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Subbar

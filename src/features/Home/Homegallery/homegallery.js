import React from 'react'

const photos = [
{
    name: require('../../../assets/img/homegallery/p1.jpg')
},
{
    name: require('../../../assets/img/homegallery/p2.jpg')
},
{
    name: require('../../../assets/img/homegallery/p3.jpg')
},
{
    name: require('../../../assets/img/homegallery/p4.jpg')
},
{
    name: require('../../../assets/img/homegallery/p5.jpg')
},
{
    name: require('../../../assets/img/homegallery/p6.jpg') 
},
];

const homegallery = (props) => {
    return (
        <div>
            <div className="autoMargin">
                <div className="row">
                    {
                        photos.map((photo,index)=>(
                            <div style={{padding: "0px"}} className="col-lg-2 col-md-4 col-sm-6 img-hover-zoom"  key={index}>
                               <img style={{height: "200px", maxWidth: "300px", minWidth: "100%"}} src={photo.name} alt=""></img>
                            </div>
                        ))
                    }
                </div>
                
            </div>
        </div>
    )
}

export default homegallery


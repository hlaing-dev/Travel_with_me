import React from 'react'
import { color } from '../../config/color'
import { Figure } from './Component/ImageFigure'
import Mainimage from '../Common/MainImageContainer'
import beach from '../../assets/img/beach.jpg'


const data = [
    { imgName: 'bagan.jpg', name: 'BAGAN' },
    { imgName: 'inle.jpg', name: 'INLE' },
    { imgName: 'inndawgyi.jpg', name: 'INNDAWGYI' },
    { imgName: 'kalaw.jpg', name: 'KALAW' },
    { imgName: 'mandalay.jpg', name: 'MANDALAY' },
    // { imgName: 'goldenrock.jpg', name: 'MON STATE' },
    { imgName: 'ngwesaung.jpg', name: 'NGWE SAUNG' },
    { imgName: 'naypyitaw.jpg', name: 'NAYPYITAW' },
    { imgName: 'ngapali.jpg', name: 'NGAPALI' },
    { imgName: 'pyinoolwin.jpg', name: 'PYINOOLWIN' },
    { imgName: 'yangon.jpg', name: 'YANGON' },
    { imgName: 'loikaw.jpg', name: 'LOIKAW' },
    { imgName: 'popa.jpg', name: 'POPA' },
    { imgName: 'mtvictoria.jpg', name: 'MT VICTORIA' },
    { imgName: 'kyaingtong.jpg', name: 'KYAING TONG' },
    { imgName: 'ngwesaung.jpg', name: 'NGWE SAUNG' },
    { imgName: 'minbu.jpg', name: 'MINBU' },
    { imgName: 'meiktila.jpg', name: 'MEIKTILA' },
    { imgName: 'kawthaung.jpg', name: 'KAWTHAUNG' }
]

const destination = () => {
    return (
        <div>
            <Mainimage mainImage={beach} text="Top Destinations" ></Mainimage>
        <div className="container pt-5 p-2" style={{ maxWidth: '1390px'}}>
            <div className="row" style={{textAlign: "center", margin: "20px !important"}}>
                {
                    data.map((v, k) =>
                        <div className='col-md-4 col-xl-2 col-lg-3 col-sm-6 col-xs-12 p-3' key={k}>
                            <div>
                             <Figure className="des-img-hover-zoom" imageName={v.name} imagePath={v.imgName} />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
        </div>
    )
}

export default destination
import React from 'react'
import { color } from '../../config/color'
import { Figure } from '../../components/ImageFigure'
import Mainimage from '../Common/MainImageContainer'
import beach from '../../assets/img/beach.jpg'


const data = [
    { imgName: 'bagan.jpg', name: 'BAGAN' },
    { imgName: 'inle.jpg', name: 'INLE' },
    { imgName: 'inndawgyi.jpg', name: 'INNDAWGYI' },
    { imgName: 'kalaw.jpg', name: 'KALAW' },
    { imgName: 'mandalay.jpg', name: 'MANDALAY' },
    { imgName: 'mon.jpg', name: 'MON STATE' },
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
        <div className="container p-5">
            <div className="row">
                {
                    data.map((v, k) =>
                        <div className='img-hover-zoom col-md-3 col-lg-2 col-sm-4 pt-2' style={{ width: '400px', height: '200px' }} key={k}>
                            <Figure imageName={v.name} imagePath={v.imgName} />
                        </div>
                    )
                }
            </div>
        </div>
        </div>
    )
}

export default destination

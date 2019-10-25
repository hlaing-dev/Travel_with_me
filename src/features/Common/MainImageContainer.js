import React from 'react'
import {color} from   '../../config/color'

const TopView = props => {
    const {mainImage , text} =  props
    return (
        <div className='col-lg-12' >
            <img src={mainImage} alt={'kal kya '} style={{ width: '100%', height: '470px' }} />
            <div style={{position: 'absolute', top: '50%',left: '50%',fontSize: 16, color: color.topMainText }}>{text}</div>
        </div>
    )
}
export default TopView
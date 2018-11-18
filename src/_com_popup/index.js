import React from 'react'
import Images from './Images'
import Booker from './Booker'

export default () => {
    return(<div className='popup' id='popup'>
        <div className='popup__content'>
            <Images/>
            <Booker/>
        </div>
    </div>)
}
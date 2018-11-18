import React from 'react'
import tourphoto from '../img/nat-8.jpg'
import tourphoto2 from '../img/nat-9.jpg'

export default () => {
    return(<div className='popup__left'>
        <img className='popup__img' src={tourphoto} alt='Tour'/>
        <img className='popup__img' src={tourphoto2} alt='Tour 2'/>
    </div>)
}
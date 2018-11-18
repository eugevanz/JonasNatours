import React from 'react'
import logoWhite from '../img/logo-white.png'

export default () => {
    return(<header className='hdr'>
        <div className='hdr__logo-box'>
            <img className='hdr__logo-box-logo' src={logoWhite} alt='Logo'/>
        </div>
        <div className='hdr__hdng-box'>
            <h1 className='hdng-pri'>
                <span className='hdng-pri--title'>Outdoors</span>
                <span className='hdng-pri--sub'>is where life happens</span>
            </h1>
            <a className='btn btn--wht' href='#section-tours'>Discover our tours</a>
        </div>
    </header>)
}
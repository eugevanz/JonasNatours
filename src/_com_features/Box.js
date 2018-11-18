import React from 'react'

export default (props) => {
    return(<div className='feature-box'>
        <i className={`feature-box__icon ${props.icon}`}></i>
        <p className='hdng-ter u-margin-bottom-small'>{props.heading}</p>
        <p className='feature-box__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat feugiat quam.</p>
    </div>)
}
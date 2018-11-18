import React from 'react'

export default (props) => {
    return(<div className='card'>
        <div className='card__side card__side--front'>
            <div className={`card__picture card__picture--${props.number}`}>&nbsp;</div>
            <p className='card__heading'>
                <span className={`card__heading-span card__heading-span--${props.number}`}>{props.heading}</span>
            </p>
            <div className='card__details'>
                <ul>
                    {props.list.map((item,i) => <li key={i}>{item}</li>)}
                </ul>
            </div>
        </div>
        <div className={`card__side card__side--back card__side--back-${props.number}`}>
            <div className='card__call-to-action'>
                <div className='card__price-box'>
                    <p className='card__price-only'>Only</p>
                    <p className='card__price-value'>{props.price}</p>
                </div>
                <a href='#popup' className='btn btn--wht'>Book now!</a>
            </div>
        </div>
    </div>)
}
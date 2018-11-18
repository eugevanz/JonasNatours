import React from 'react'

export default () => {
    const links = ['About Natours','Your benefits','Popular tours','Stories','Book Now']
    return(<div className='navigation'>
            <input className='navigation__checkbox' type='checkbox' id='navi-toggle'/>
            <label className='navigation__button' htmlFor='navi-toggle'>
                <span className='navigation__icon'>&nbsp;</span>
            </label>
            <div className='navigation__background'>&nbsp;</div>
            <nav className='navigation__nav'>
                <ul className='navigation__list'>
                    {links.map((item,i) => <li className='navigation__item' key={i}>
                        <a className='navigation__link' href='#nav'><span>0{i+1}</span>{item}</a>
                    </li>)}
                </ul>
            </nav>
        </div>)
}
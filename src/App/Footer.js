import React from 'react'
import logo2x from '../img/logo-green-2x.png'
import logo1x from '../img/logo-green-1x.png'
import logosmall1x from '../img/logo-green-small-1x.png'
import logosmall2x from '../img/logo-green-small-2x.png'

export default () => {
    const navlist = ['Company','Contact Us','Careers','Privacy Policy','Terms']
    return(<footer className='footer'>
        <div className='footer__logo-box'>
            <picture className='footer__logo'>
                <source srcSet={`${logosmall1x} 1x, ${logosmall2x} 2x`} media='(max-width: 37.5em)'/>
                <img srcSet={`${logo1x} 1x, ${logo2x} 2x`} alt='Full logo'/>
            </picture>
        </div>
        <div className='row'>
            <div className='col-1-of-2'>
                <div className='footer__navigation'>
                    <ul className='footer__list'>
                        {navlist.map((item,i) => <li className='footer__item' key={i}>
                            <a className='footer__link' href='#nav'>{item}</a>
                        </li>)}
                    </ul>
                </div>
            </div>
            <div className='col-1-of-2'>
                <p className='footer__copyright'>Built by <a className='footer__link' href='#nav'>Eugene Van Zyl</a> for training purposes: <a className='footer__link' href='#nav'>Advanced CSS and Sass (SCSS)</a>. Copyright &copy; by Eugene Van Zyl. You are allowed to re-purpose this site for personal and commercial use, with explicit consent only. Credit to the original author, Jonas Schmedtmann, is mandatory.</p>
            </div>
        </div>
    </footer>)
}
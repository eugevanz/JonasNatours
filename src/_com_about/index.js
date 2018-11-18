import React, { Component } from 'react'
import Profile from './Profile'
import Collage from './Collage'

export default class About extends Component {
    render() {
        return(<section className='section-about'>
        <div className='u-center-text u-margin-bottom-large'>
            <h2 className='hdng-sec'>Exciting tours for adventurous people</h2>
        </div>
        <div className='row'>
            <div className='col-1-of-2'><Profile/></div>
            <div className='col-1-of-2'><Collage/></div>
        </div>
        </section>)
    }
}
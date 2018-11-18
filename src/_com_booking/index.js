import React, { Component } from 'react'
import Book from './Book';

export default class Booking extends Component {
    render() {
        return(<section className='section-booking'>
            <div className='row'>
                <Book/>
            </div>
        </section>)
    }
}
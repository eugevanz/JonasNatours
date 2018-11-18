import React, { Component } from 'react'
import Box from './Box';

export default class Features extends Component {
    constructor() {
        super()
        this.state = {
            headings: ['Explore the world','Meet nature','Find your way','Live a healthier life'],
            icons: ['icon-basic-world','icon-basic-compass','icon-basic-map','icon-basic-heart']
        }
    }
    render() {
        return(<section className='section-features'>
            <div className='row'>
                {this.state.headings.map((item, i) => <div className='col-1-of-4' key={i}><Box heading={item} icon={this.state.icons[i]}/></div>)}
            </div>
        </section>)
    }
}
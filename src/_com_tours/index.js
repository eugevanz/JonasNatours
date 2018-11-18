import React, { Component } from 'react'
import Card from './Card';

export default class Tours extends Component {
    constructor() {
        super()
        this.state = {
            lists: [
                ['3 day tours','Up to 30 people','2 tour guides','Sleep in cozy hotels','Difficulty: easy'],
                ['7 day tours','Up to 40 people','6 tour guides','Sleep in provided tents','Difficulty: medium'],
                ['5 day tours','Up to 15 people','3 tour guides','Sleep in provided tents','Difficulty: hard'],
            ],
            prices: ['$297','$497','$897'],
            headings: ['The Sea Explorer','The Forest Hiker','The Snow Adventurer']
        }
    }
    render() {
        return(<section className='section-tours' id='section-tours'>
            <div className='u-center-text u-margin-bottom-large'>
                <h2 className='hdng-sec'>Most popular tours</h2>
            </div>
            <div className='row'>
                {this.state.lists.map((item,i) => <div className='col-1-of-3' key={i}><Card number={i+1} heading={this.state.headings[i]} price={this.state.prices[i]} list={item}/></div>)}
            </div>
            <div className='u-center-text u-margin-top-large'>
                <a href='#btn' className='btn btn--green'>Discover all tours</a>
            </div>
        </section>)
    }
}
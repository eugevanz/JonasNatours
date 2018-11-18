import React, { Component } from 'react'
import Story from './Story'
import marypic from '../img/nat-8.jpg'
import jackpic from '../img/nat-9.jpg'
import BackVideo from './BackVideo';

export default class Stories extends Component {
    constructor() {
        super()
        this.state = {
            names: ['Mary Smith','Jack Wilson'],
            pics: [marypic,jackpic],
            headings: ['I had the best week ever with my family','Wow! My life is completely different now']
        }
    }
    render() {
        return(<section className='section-stories'>
            <BackVideo/>
            <div className='u-center-text u-margin-bottom-large'>
                <h2 className='hdng-sec'>We make people genuinely happy</h2>
            </div>
            {this.state.names.map((item,i) => <div className='row' key={i}>
                <Story name={item} pic={this.state.pics[i]} heading={this.state.headings[i]}/>
            </div>)}
            <div className='u-center-text u-margin-top-large'>
                <a href='#btn' className='btn-text'>Read all stories &rarr;</a>
            </div>
        </section>)
    }
}
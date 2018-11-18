import React, { Component } from 'react'
import Header from './Header'
import Pages from './Pages'
import Footer from './Footer';
import Navigation from './Navigation';
import PopUp from '../_com_popup';

export default class App extends Component {
    render() {
        return(<React.Fragment>
            <Navigation/>
            <Header/>
            <Pages/>
            <Footer/>
            <PopUp/>
        </React.Fragment>)
    }
}
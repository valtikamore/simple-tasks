import React, {useState} from 'react'
import {HashRouter} from 'react-router-dom'
import Header from './Header'
import Routes from './Routes'

function HW5() {


    return (
        <HashRouter>
            <Header/>
            <Routes/>
        </HashRouter>
    )
}

export default HW5

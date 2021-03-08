import React, {useState} from 'react'
import { HashRouter } from 'react-router-dom'
import Header from './Header'
import Routes from './Routes'
import s from './HW5.module.css'

function HW5() {


    return (
        <div className={s.grid}>

            <HashRouter>

            <Header/>

            <Routes/>

            </HashRouter>
        </div>
    )
}

export default HW5

import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import s from './header.module.css'
import {Navbar} from "./navbar/navbar";

function Header() {
    const [collapsed,setCollapsed]=useState<boolean>(false)
    return (
        <div className={s.header}>
            <div className={s.navBarCircle} onClick={()=>setCollapsed(!collapsed)}>
                {collapsed &&  <Navbar />}
            </div>

            <div>
                <NavLink to='/pre-junior'> Pre-junior</NavLink>
            </div>
            <div>
                <NavLink to='/junior'> Junior</NavLink>
            </div>
            <div>
                <NavLink to='/juniorPlus'> Junior+</NavLink>
            </div>
        </div>
    )
}

export default Header

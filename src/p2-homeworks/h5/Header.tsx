import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import s from './header.module.css'
import {Navbar} from "./navbar/navbar";
import {PATH} from "./Routes";

function Header() {
    const [collapsed,setCollapsed]=useState<boolean>(false)
    return (
        <div className={s.header}>
            <div className={s.worksBlockLink}>
                <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.active} className={s.link}> Pre-junior</NavLink>
                <NavLink to={PATH.JUNIOR} activeClassName={s.active} className={s.link}> Junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.active} className={s.link}> Junior+</NavLink>
                <div className={s.block} >
                </div>
            </div>
        </div>
    )
}{/*onClick={() => setCollapsed(!collapsed)}*/}
{/*{collapsed && <Navbar/>}*/}


export default Header

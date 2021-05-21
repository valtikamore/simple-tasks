import React, {MouseEventHandler, useState} from 'react'
import { NavLink } from 'react-router-dom'
import s from './header.module.css'
import {PATH} from "./Routes";

function Header() {
    const [state, setState] = useState(true);

    return (
        <div className={s.header}>
            {state ?  <div className={s.block} onClick={()=>setState(prevState => prevState = false )}> hide</div> :  <div className={s.block} onClick={()=>setState(prevState => prevState = true )}> show</div>}

            {state &&  <div className={s.header__linkGroup}>
                <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.active} className={s.link}> Pre-junior</NavLink>
                <NavLink to={PATH.JUNIOR} activeClassName={s.active} className={s.link}> Junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.active} className={s.link}> Junior+</NavLink>
            </div>  }

        </div>
    )
}{/*onClick={() => setCollapsed(!collapsed)}*/}
{/*{collapsed && <Navbar/>}*/}


export default Header

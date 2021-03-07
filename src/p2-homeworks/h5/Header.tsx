import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './header.module.css'

function Header() {
    return (
        <div className={s.header}>
           <div>
               <NavLink to='/HW1'> Homework 1 - Message</NavLink>
           </div>
            <div>
                <NavLink to='/HW2'> Homework 2 - Affairs</NavLink>
            </div>
            <div>
                <NavLink to='/HW3'> Homework 3 - Greeting</NavLink>
            </div>
            <div>
                <NavLink to='/HW4'> Homework 4 - Buttons/Inputs</NavLink>
            </div>
            <div>
                <NavLink to='/pre-junior'> Home</NavLink>
            </div>


        </div>
    )
}

export default Header
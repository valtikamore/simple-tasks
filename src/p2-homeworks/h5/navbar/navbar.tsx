import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import s from  './navbar.module.css'


export function Navbar () {
    return (
        <div className={s.navbar}>
            <div>
                <NavLink to='/HW1'> Message</NavLink>
            </div>
            <div>
                <NavLink to='/HW2'>  Affairs</NavLink>
            </div>
            <div>
                <NavLink to='/HW3'> Greeting</NavLink>
            </div>
            <div>
                <NavLink to='/HW4'>Buttons/Inputs</NavLink>
            </div>
            <div>
                <NavLink to='/HW6'> span/text </NavLink>
            </div>
            <div>
                <NavLink to='/pre-junior'> Home</NavLink>
            </div>
        </div>
    )
}
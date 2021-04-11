import React from "react";
import Clock from "./Clock";
import classes from '../h5/pages/preJunior.module.css'
export function HW9() {
    return (
        <div className={classes.item}>

            <Clock/>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
        </div>
    );
}

export default HW9;

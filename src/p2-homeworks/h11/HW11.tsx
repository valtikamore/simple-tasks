import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import classes from "../h5/pages/preJunior.module.css";

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    return (
        <div className={classes.item}>
            <div>
                <span>{value1}</span>
                <SuperRange
                   value1={value1}
                   onChangeRange={setValue1}
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    value={[value1,value2]}

                />
                <span>{value2}</span>
            </div>

        </div>
    );
}

export default HW11;

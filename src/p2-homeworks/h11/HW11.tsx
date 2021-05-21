import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import classes from "../h5/pages/preJunior.module.css";

function HW11() {
    const [value1, setValue1] = useState(0);

    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(100);

    const onChangeRange = (value: number | number[]) => {
        if (Array.isArray(value)) {
            setValue2(value[0])
            setValue3(value[1])
        }
    }
    return (
        <div className={classes.item}>
            <div>
                <div style={{display:'inline-block' , width:'10px',marginRight:'10px'}}>{value1}</div>
                <SuperRange
                   value1={value1}
                   onChangeRange={setValue1}
                />
            </div>

            <div>
                <div style={{display:'inline-block' , width:'10px',marginRight:'10px'}}>{value2}</div>
                <SuperDoubleRange
                    value={[value2, value3]}
                    onChangeRange={onChangeRange}/>
                <div style={{display:'inline-block' , width:'10px',marginRight:'10px'}}>{value3}</div>
            </div>

        </div>
    );
}

export default HW11;

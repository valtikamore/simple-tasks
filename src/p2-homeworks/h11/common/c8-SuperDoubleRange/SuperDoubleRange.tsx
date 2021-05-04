import { Slider } from "@material-ui/core";
import React from "react";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value:number | number[]) => void
    value: [number, number]
    onChangeRangeO?: (value:number) => void
    // min, max, step, disable, ...
}
function valuetext(value: number) {
    return `${value}`;
}
const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {

const handleChange  = (event: React.ChangeEvent<{}>, value: (number | number[])) => {
    onChangeRange && onChangeRange(value as number)
};
    return (
        <Slider
            style={{
                color:"grey",
                width:500
            }}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}>
            DoubleRange
        </Slider>
    );
}

export default SuperDoubleRange;

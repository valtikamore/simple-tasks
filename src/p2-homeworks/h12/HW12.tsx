import React, {useState} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";



function HW12() {


    const theme = useSelector<AppStoreType,'dark'|'red'|'some'>(state => state.theme.theme)

    const themes = ['dark', 'red', 'some'];

    const [value, onChangeOption] = useState(themes);
    
    const dispatch = useDispatch()

    const onChangeCallback = (e:any) => {
        dispatch(changeThemeC(e.currentTarget.value))
    }

    return (
        <div className={s[theme]}>

            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
          <SuperSelect options={themes} onChangeOption={onChangeCallback} value={themes[1]}   />

        </div>
    );
}

export default HW12;

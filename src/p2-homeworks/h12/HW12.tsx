import React from 'react';
import s from './HW12.module.css';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {changeThemeAC, ThemeStateType} from './bll/themeReducer';



function HW12() {
    const state =useSelector<AppStoreType, ThemeStateType>(state => state.theme)
    const dispatch = useDispatch()

    // useDispatch, onChangeCallback
    const onChangeCallback=(theme:string)=>{
        dispatch(changeThemeAC(theme))
    }

    return (
        <div className={s[state.theme]}>
            <hr/>
            <span className={s[state.theme + '-text']}>
                homeworks 12
            </span>
            <SuperRadio
                options={state.themes}
                value={state.theme}
                onChangeOption={onChangeCallback}
            />
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
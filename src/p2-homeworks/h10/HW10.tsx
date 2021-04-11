import React from "react";
import {useDispatch, useSelector} from "react-redux";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import classes from '../h5/pages/preJunior.module.css'
function HW10() {
    const dispatch  = useDispatch()
    const isLoading = useSelector<AppStoreType,boolean>(state => state.loading.loading)




    const setLoading = () => {
        // dispatch
       dispatch(loadingAC(true))
        setTimeout(()=> {
            dispatch(loadingAC(false))
        },2000)
    };

    return (
        <div className={classes.item}>
            {isLoading
                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
        </div>
    );
}

export default HW10;

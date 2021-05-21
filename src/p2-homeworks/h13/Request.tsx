import React, {ChangeEvent, useState} from 'react'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {RequestApi} from "./api/RequestAPI";

export const Request = () => {

    const [success, setSuccess] = useState(false );
    const [response, setResponse] = useState('');

    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setSuccess(e.currentTarget.checked )

    const onButtonClick = () => {
        RequestApi.auth(success)
            .then(res => setResponse(JSON.stringify(res)))
            .catch(err => {
                setResponse(JSON.stringify(err.message))
            })
    }
    return (
        <div>
            <SuperButton onClick={onButtonClick}> entity</SuperButton>
            <SuperCheckbox  onChange={testOnChange} />
            <div>
                {response}
            </div>
        </div>
    )
}
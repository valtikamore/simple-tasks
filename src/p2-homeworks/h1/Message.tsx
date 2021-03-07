import React from 'react'
import { messageProps } from './HW1'




function Message(props:messageProps) {
    return (
        <div>
            <img src={props.avatar} alt=""/>
            <div>{props.name}</div>
            <div>{props.message}</div>
            <div>{props.time}</div>
        </div>
    )
}

export default Message

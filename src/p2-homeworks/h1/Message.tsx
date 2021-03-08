import React from 'react'
import { messageProps } from './HW1'
import s from './Message.module.css'


function Message(props:messageProps) {
    return (
            <div className={s.message}>
                <img src={props.avatar} alt="" className={s.image}/>
                <div className={s.info}>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.messageText}>{props.message}</div>
                    <div className={s.time}>{props.time}</div>
                </div>
            </div>
    )
}

export default Message

import React from 'react'
import Message from "./Message";
import s from "./Message.module.css";
import classes from "../h5/pages/preJunior.module.css";



export type messageProps = {
    avatar: string
    name: string
    message: string
    time: string
}

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Valentine',
    message: 'never never give you up ',
    time: '02:28',
}


function HW1() {
    return (
            <div className={`${s.wrapper} ${classes.item}`}>
                <Message
                    avatar={messageData.avatar}
                    name={messageData.name}
                    message={messageData.message}
                    time={messageData.time}
                />
        </div>

    )
}

export default HW1

import React from 'react'
import Message from "./Message";



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
        <div>

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            {/*<AlternativeMessage/>*/}
        </div>
    )
}

export default HW1

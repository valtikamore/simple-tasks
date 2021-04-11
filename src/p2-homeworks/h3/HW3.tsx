import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import { v1 } from 'uuid'
import s from './Greeting.module.css'
import classes from '../h5/pages/preJunior.module.css'
// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([])

    const addUserCallback = (name: string) => {
        const newUser = {
            _id: v1(),
            name: name
        }
        setUsers([newUser,...users])
    }

    return (
        <div className={`${s.wrapper}${classes.item}`}>
            <div>
                <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            </div>


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
        </div>
    )
}

export default HW3

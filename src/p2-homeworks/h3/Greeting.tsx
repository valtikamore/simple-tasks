import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e:ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: ()=>void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = `${s.input} ${error ? s.error : s.secsess}`

    return (
        <div className={s.greeting}>
                <input
                    value={name}
                    onChange={setNameCallback}
                    className={inputClass}/>
            <div >{error}</div>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting

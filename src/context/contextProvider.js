import React, {createContext, useState} from 'react'

const Context = createContext()


export default function ContextProvider(props) {

    const [role, setRole] = useState('')


    return(
        <Context.Provider value={{setRole, role}}>
            {props.children}
        </Context.Provider>
        )
}

export {ContextProvider, Context}

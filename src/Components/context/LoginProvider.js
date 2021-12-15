import React, { createContext, useEffect, useState } from 'react'

export const LoginContext = createContext()

const LoginProvider = (props) => {


    const [login, setLogin] = useState(false)

    // useEffect(() => {
        
    //     if (localStorage.getItem('tempToken')) {
    //         const loginValue = JSON.parse(localStorage.getItem('tempToken'))
    //         setLogin(loginValue)
    //     } 


    // }, [])

    // const cambiarLogin = valor => {
    //     setLogin(valor)
    //     localStorage.setItem('tempToken', JSON.stringify(valor))
    // }
   


    return (
        <LoginContext.Provider value={{login, setLogin}}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginProvider

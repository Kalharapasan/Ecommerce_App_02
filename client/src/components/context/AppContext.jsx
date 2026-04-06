 import React, { createContext, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
 
 const AppContext =createContext()

export const AppContextProvider = ({children}) =>{

    const navigater =useNavigate()

    const value = {navigater}

    return (
        <AppContext.Provider value={value} >{children}</AppContext.Provider>
    )
}

export const useAppContext =() => useContext(AppContext)
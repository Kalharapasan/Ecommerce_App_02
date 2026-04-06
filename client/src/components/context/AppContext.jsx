import React, { createContext, useContext } from 'react'
import { useClerk } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/react'
 
 const AppContext =createContext()

export const AppContextProvider = ({children}) =>{

    const navigater =useNavigate()
    const {user} =  useUser()
    const value = {navigater,user}

    return (
        <AppContext.Provider value={value} >{children}</AppContext.Provider>
    )
}

export const useAppContext =() => useContext(AppContext)
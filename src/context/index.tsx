"use client"

import {createContext, useContext, useEffect, useState} from 'react'
import {API} from "@/api/api"

const AppContext = createContext<any>(undefined)

export function AppWrapper({children} : {

    children:React.ReactNode

}){
    let [user,setUser] = useState(null)
    const token  = localStorage.getItem('token')
    const TEATCHER = localStorage.getItem('teatcher')

    useEffect(()=>{

    if(TEATCHER){
        let data = JSON.parse(TEATCHER)
        setUser(data)

    }


    },[])

    API.defaults.headers.Authorization = token


    const Logged=(data:any)=>{

        setUser(data.teatcher)
        localStorage.setItem('token',JSON.stringify(data.token))
        localStorage.setItem('teatcher',JSON.stringify(data.teatcher))


    }


    const Logout=()=>{

       const data_to_remove = ['token','teatcher']

       data_to_remove.forEach((items:string)=>{

        localStorage.removeItem(items)

       })


    }


    return(

        <AppContext.Provider value={{Authenticated:!!user, Logged,Logout,setUser,token}}>
            {children}
        </AppContext.Provider>
    )

}
export const useAppContext = ()=>useContext(AppContext)

// import {useAppContext} from "@/context"
// const {hello} = useAppContext()
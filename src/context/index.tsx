"use client"

import {createContext, useContext, useEffect, useState} from 'react'
import {API} from "@/api/api"

interface ContextTypes{
Logged?:(data:any)=>void;
Logout?:()=>void;
setUser?:any;
Authenticated?:boolean;
token?:string|null;
children:React.ReactNode
    
}

export const AppContext = createContext<ContextTypes>(
    
    {} as ContextTypes)



export const AppWrapper:React.FC<ContextTypes> =({children})=>{
    let [user,setUser] = useState<any>(null)
    const token = window.localStorage.getItem('token')

    useEffect(()=>{
        const TEATCHER = localStorage.getItem('teatcher')   
       
    if(TEATCHER){
        let data = JSON.parse(TEATCHER)
        setUser(data)

    }


    },[])

    API.defaults.headers.Authorization = token

    const Logged=(data:any)=>{

        setUser(data.teatcher)

            window.localStorage.setItem('teatcher',JSON.stringify(data.teatcher))
            window.localStorage.setItem('token',data.token)

    }


    const Logout=()=>{

       const data_to_remove = ['token','teatcher']
     
        return  data_to_remove.forEach((items:string)=>{
               localStorage.removeItem(items)
            })
     
     
    }


    return(

        <AppContext.Provider value={{Authenticated:!!user, Logged,Logout,setUser,children}}>
            {children}
        </AppContext.Provider>
    )

}
// export const useAppContext = ()=>useContext(AppContext)

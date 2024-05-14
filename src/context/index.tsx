"use client"

import {createContext, useContext, useEffect, useState} from 'react'
import {API} from "@/api/api"

interface ContextTypes{
Logged?:(data:any)=>void;
Logout?:()=>void;
setUser?:any;
Authenticated:boolean;
token?:string|null;
    
}

const AppContext = createContext<ContextTypes>(
    {}as ContextTypes
)



export function AppWrapper({children} : {

    children:React.ReactNode

}){
    let [user,setUser] = useState<any>(null)
    const token :string|null = localStorage.getItem('token')
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

        const data_to_save = ['token','teatcher']
        const save=()=>{
            return data_to_save.forEach((items:string)=>{
                localStorage.setItem(`${items}`,JSON.stringify(data[`${items}`]))
            })
        }
        save()



    }


    const Logout=()=>{

       const data_to_remove = ['token','teatcher']
       const remove=()=>{
        return  data_to_remove.forEach((items:string)=>{
               localStorage.removeItem(items)
            })
       }
       remove()
     
    }


    return(

        <AppContext.Provider value={{Authenticated:!!user, Logged,Logout,setUser,token}}>
            {children}
        </AppContext.Provider>
    )

}
export const useAppContext = ()=>useContext(AppContext)

"use client"

import {createContext,useEffect, useState} from 'react'
import  Cookie  from 'js-cookie';
import {API} from "@/api/api"
import { useRouter } from 'next/navigation';


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



export const AuthContext:React.FC<ContextTypes> =({children})=>{
    let [user,setUser] = useState<any>(null)
    const token = window.localStorage.getItem('token')
    const TEATCHER = localStorage.getItem('teatcher')   
    const router = useRouter()

    useEffect(()=>{
           
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
            Cookie.set('token',data.token)
            router.push('/')
    }


    const Logout=()=>{

       const data_to_remove = ['token','teatcher']
        
       Cookie.remove('token')
       data_to_remove.forEach((items:string)=>{
              
             return  localStorage.removeItem(items)

            })
        router.push('/loginpage')    
      
    }


    return(

        <AppContext.Provider value={{Authenticated:!!user, Logged,Logout,setUser,children}}>
            {children}
        </AppContext.Provider>
    )

}
// export const useAppContext = ()=>useContext(AppContext)

"use client"

import {createContext,useEffect, useState} from 'react'
import  Cookie  from 'js-cookie';
import {API} from "@/api/api"
import { useRouter } from 'next/navigation';


interface ContextTypes{
Logged?:(data:any)=>void;
Logout?:()=>void;
user?:any;
setUser?:any;
Authenticated?:boolean;
token?:string|null;
children:React.ReactNode;
    
}

export const AppContext = createContext<ContextTypes>(
    
    {} as ContextTypes)



export const AuthContext:React.FC<ContextTypes> =({children})=>{
    let [user,setUser] = useState<any>(null)
    const token = window.localStorage.getItem('token')
    const TeatcherorStudent = localStorage.getItem('teatcher') || localStorage.getItem('student')    
    const router = useRouter()

    useEffect(()=>{
       
    if(TeatcherorStudent){
        let data = JSON.parse(TeatcherorStudent )
        setUser(data)

    }


    },[])

    API.defaults.headers.Authorization = token

    const Logged=(data:any)=>{

        for(const i in data){     
            
            if(i === 'student' || i ==='teatcher'){   
            setUser(data[i])    
            window.localStorage.setItem(`${i}`,JSON.stringify(data[`${i}`]))
            }else{
                window.localStorage.setItem(`${i}`,data.token)
            }
        
         
        }
        
            Cookie.set('token',data.token)
         
        
    }


    const Logout=()=>{

       const data_to_remove = ['token','teatcher','student']
        
       Cookie.remove('token')
       data_to_remove.forEach((items:string)=>{
              
             return  localStorage.removeItem(items)

            })
        router.push('/loginpage')    
      
    }


    return(

        <AppContext.Provider value={{Authenticated:!!user,user, Logged,Logout,setUser,children}}>
            {children}
        </AppContext.Provider>
    )

}
// export const useAppContext = ()=>useContext(AppContext)

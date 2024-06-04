"use client"

import {createContext,useEffect, useState} from 'react'
import  Cookie  from 'js-cookie';
import {API} from "@/api/api"
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';


interface ContextTypes{
Logged?:(data:any)=>void;
Logout?:()=>void;
user?:any;
setUser?:any;
Authenticated?:boolean;
token?:string|null;
children:React.ReactNode;
Handle_Question?:(question:string,response:any)=>any
    
}

export const AppContext = createContext<ContextTypes>(
    
    {} as ContextTypes)



export const AuthContext:React.FC<ContextTypes> =({children})=>{
    let [user,setUser] = useState<any>(null)
    const token = window.localStorage.getItem('token')
    const TeatcherorStudent = localStorage.getItem('teatcher') || localStorage.getItem('student')    
    const router = useRouter()



    const Handle_Question =(question:string,response:any)=>{

        Swal.fire({
            title: `${question}`,
            // text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim,remover!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: `${response.data}`,
                // text: "Your file has been deleted.",
                icon:  response.status == 200 ? "success" : "error"
              });
            }
          });

    }

   

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

        <AppContext.Provider value={{Authenticated:!!user,user, Logged,Logout,setUser,Handle_Question,children}}>
            {children}
        </AppContext.Provider>
    )

}
// export const useAppContext = ()=>useContext(AppContext)

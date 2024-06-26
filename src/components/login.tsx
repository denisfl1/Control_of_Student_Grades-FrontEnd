"use client"

import background from "@/imgs/classroom.jpg"
import school from "@/imgs/school.png"
import { useContext, useState } from "react"
import {API} from "@/api/api"
import { AppContext } from "@/context"
import { useRouter } from 'next/navigation';

export default function login(){

    const[credential,setCredential]= useState<string>()
    const[password,setPassword]= useState<string>()
    const{Logged}= useContext(AppContext)
    const router = useRouter()


    const HandleLogin = async(e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault()

       await API.post('/login',{credential,password}).then(
            res=>{
                if(res.status == 200 && Logged)return Logged(res.data),router.push('/')
               
 
            },error=>{
                console.log(error)
            }

        )





    }


    return(
        <>

    <img className="loginIMG" src={background.src}></img>
        <div className="loginContent flex relative  m-auto  bg-gray-300 bg-opacity-90 " >

            <div className="schoolIconContainer"><img className="schoolIcon" src={school.src}></img></div>  

            <form className="flex flex-col m-auto">
          
                <input onChange={(e)=>setCredential(e.target.value)} placeholder="Credenciais ou RA" type="text" name="text"></input>


                <input onChange={(e)=>setPassword(e.target.value)} placeholder="Digite sua Senha" type="password" name="password"></input>


                <button onClick={HandleLogin} className="bg-blue-500" style={{
                    backgroundColor:'rgb(0, 64, 98)'
                }}>LOGIN</button>

            </form>


        </div>


        </>
    )


}
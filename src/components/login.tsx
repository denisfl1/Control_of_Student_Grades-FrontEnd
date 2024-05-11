"use client"

import background from "@/imgs/classroom.jpg"
import school from "@/imgs/school.png"
import { useState } from "react"
import {API} from "@/api/api"

export default function login(){

    const[credential,setCredential]= useState<string>()
    const[password,setPassword]= useState<string>()


    function handleLogin(e:React.MouseEvent<HTMLButtonElement>){
    e.preventDefault()
    

        API.post('/loginTeatcher',{credential,password}).then(
            res=>{
                console.log(res.data)
            }

        )





    }


    return(
        <>

    <img className="loginIMG" src={background.src}></img>
        <div className="loginContent flex relative  m-auto  bg-gray-300 bg-opacity-90 " >

            <div className="schoolIconContainer"><img className="schoolIcon" src={school.src}></img></div>  

            <form className="flex flex-col m-auto">
          
                <input onChange={(e)=>setCredential(e.target.value)} placeholder="Digite suas Credenciais" type="text" name="text"></input>


                <input onChange={(e)=>setPassword(e.target.value)} placeholder="Senha" type="password" name="password"></input>


                <button onClick={handleLogin} className="bg-blue-500">LOGIN</button>

            </form>


        </div>


        </>
    )


}
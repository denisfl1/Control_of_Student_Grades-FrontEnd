
"use client"

import { useState } from "react"
import {API} from "@/api/api"
import iconUer from "@/imgs/add-user.png"


export default function AddStudendComp(){

    const [name,setName] = useState<string[]>([])
    const [surname,setSurname] = useState<string>()
    const [ra,setRA] = useState()


    const sendData= async()=>{

       await API.post("/createStudent",{name,surname,ra}).then(
            res=>{
               alert(res.data)
            }
        )
        

    
    }





return(


    <>

            <div className="addStudentSubContainer">
                
            <div className="containerAddStudentIMG"> <img style={{display:'flex',width:'120px',height:"120px"}} src={iconUer.src}></img></div>
                    <div className="addStudentContent">
                        
            
                    <label>Nome</label>
                    <input onChange={(e:any)=>setName(e.target.value)} placeholder="Nome" type="text"></input>
            
                    <label>Sobrenome</label>
                    <input onChange={(e:any)=>setSurname(e.target.value)} placeholder="Sobrenome" type="text"></input>
                
                    <label>RA</label>
                    <input onChange={(e:any)=>setRA(e.target.value)} placeholder="RA" type="text"></input>

                    <button onClick={sendData}>SALVAR</button>

                    </div>

            </div>
            
            </>  
  
 
)


}
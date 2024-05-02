"use client"

import React from "react";
import { useEffect, useState } from "react";
import {API} from "@/api/api"
import Header from "@/components/header";


export default function studentsList(){

    const [students,setStudents] = useState<string[]>([])
 

    const color=(student:any)=>{
        let sum = 0

        for(let i in student['notes']){

        sum+=student['notes'][i] / 13

        }
       
       
    if(sum > 8 ) return "#32CD32" 
    if(sum == 7 || 8 ) return "#4169E1"
    if(sum <5 ) return "#FF0000"

     
    }

    useEffect(()=>{

        API.get('/getStudent').then(
            res=>{         
                setStudents(res.data)  
            }
        )

    },[])


    return(

        <div className="studentsContainer  h-screen w-full">

            <Header></Header>

            <div>
            <table className="studentsTable">
            <thead>

                <tr>
                    <th>RA</th>
                    <th>Nome</th>
                    <th>Sobrenome</th>            
                    <th>Nota Final</th>
                    <th>Ver todas</th>
                 


                </tr>

                    
            </thead>

            <tbody>

            {students.map((student: any) => {
            const notes = (()=>{
                let sum = 0
                for(let i in student.notes){
                    sum+= student.notes[i] / 13
                }
            return Math.round(sum)
            })
        
            return (
                
            <tr key={student.id}>
            
            <td>{student.ra}</td>    
            <td>{student.name}</td>
            <td>{student.surname}</td>
            <td className="text-center" style={{backgroundColor:color(student)}}>{notes()}</td>
            <td><button>Ver</button></td>
         
        </tr>
      )})}

            </tbody>

 
            </table>
            </div>

        </div>

    )


}




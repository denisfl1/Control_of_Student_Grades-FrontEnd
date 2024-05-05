
"use client"
import React, { useEffect, useState } from "react";
import {API} from "@/api/api"

export default function studentNotes (){

    const [students,setStudents] = useState<string[]>([])

    useEffect(()=>{

       API.get('/getStudent').then(
        res=>{
            setStudents(res.data)

            console.log(res.data)
        }
       )



    },[])


    const Subjects =  [

        'Português',
        'Literatura',
        'Inglês',
        'Matemática',
        'Física',
        'Química',
        'Biologia',
        'Geografia',
        'História',
        'Sociologia',
        'Filosofia',
        'Artes',
        'Educação Física'

        ]
  

    return(
    <div>

        <table className=" w-full">
            <thead>

                <tr>
                    <th>Matérias</th>
                    <th>Primeiro Bimestre</th>
                    <th>Segundo Bimestre</th>            
                    <th className="text-center">Terceiro Bimestre</th>
                    <th className="text-center">Quarto Bimestre</th>
                    <th className="text-center">Média Final</th>
                 
                </tr>

                    
            </thead>

            <tbody>
        
            {Subjects.map((materias: any) => {
          
                
            return (
                
                <tr>

                    <td>{materias}</td>
                    <td></td>


                </tr>
                
         
        
      )})}

            </tbody>

 
        </table>





    </div>
    )




}

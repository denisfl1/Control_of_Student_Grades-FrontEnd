
"use client"
import React, { useEffect, useState } from "react";
import {API} from "@/api/api"

export default function studentNotes (){

    const [students,setStudents] = useState<string[]>([])
    const [notes,setNotes] = useState<string[]>([])

    useEffect(()=>{

       API.get('/getStudent').then(
        res=>{
            const data = res.data
            setStudents([res.data])  
            setNotes([data.notes])
   
        }
       )



    },[])

    const notesColor=(val:any)=>{
       

        
     
        if( val >= 7 ) return "#32CD32"
        return "#FF0000"
    
        
     
    }


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
        
            {notes.map((data: any) => {
            let keys = [
                'português',
                'literatura',
                'inglês',          
                'matemática',
                'física',          
                'química',
                'biologia',        
                'geografia',
                'história',        
                'sociologia',
                'filosofia',       
                'artes',
                'educação_física'
              ]
    
                return(
             
                    <>

                    {keys.map((it,index)=>{
                        let sum = (data['1'][it]+data['2'][it]+data['3'][it]+data['4'][it])/4
                          
                        return(
                        <tr>
                            <td >{Subjects[index]}</td>
                            <td style={{backgroundColor:notesColor(data['1'][it])}}>{data['1'][it]}</td>
                            <td>{data['2'][it]}</td>
                            <td>{data['3'][it]}</td>
                            <td>{data['4'][it]}</td>
                            <td>{Math.round(sum)}</td>
                        </tr>
                        )
                    })}
                
                    </>
  


                )

                })}

            </tbody>

 
        </table>





    </div>
    )




}

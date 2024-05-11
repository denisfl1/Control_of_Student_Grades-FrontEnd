
"use client"
import React, { useEffect, useState } from "react";
import {API} from "@/api/api"
import background from "@/imgs/classroom.jpg"

interface idParams{
   params:{id:string}
}


export default function studentNotes ({params}:idParams){

    const [students,setStudents] = useState<any>([])
    const [notes,setNotes] = useState<string[]>([])

    useEffect(()=>{

       API.get(`/getStudent/${params.id}`).then(
        res=>{
            const data = res.data
            setStudents(data)  
            setNotes([data.notes])
   
        }
       )



    },[])

    const notesColor=(val:any)=>{

        
        if(val >= 7 ) return "#87CEFA"
        if(val != Number) return "#FFFFFF"
        return "#FA8072"

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
    <div className="tableAllNotesContainer">
          
        <div className="studentInfoContainer" style={{height:'150px',backgroundColor:"#F3F4F6"}}>
             

        <div className="studentInfo" >
          <div style={{display:'flex',alignItems:"center",fontWeight:"bold",fontSize:'35px'}}><h1 >Aluno:</h1><h1 style={{fontWeight:"normal"}}>{students.name} {students.surname}</h1></div> 
          <div style={{display:'flex',alignItems:"center",fontWeight:"bold",fontSize:'35px'}}><h1 >RA:</h1><h1 style={{fontWeight:"normal"}}>{students.ra}</h1></div> 
        </div>

        <div className="legContainer">
            <div className="flex flex-wrap">
                <div className="Leg aproved"></div>
                <p>Aprovado</p>
            </div>
            
            <div className="flex flex-wrap mt-1">
                <div className="Leg reproved"></div>
                <p>Reprovado</p>
            </div>

        </div>

        </div>

        <div className="tableAllNotesSubContainer">
        <img style={{zIndex:-1,position:'absolute',width:"100%",maxHeight:"100%"}} src={background.src}></img>
        <div className="background"></div>
        <table className="tableAllNotes  w-full">
       
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
                      
                        let first = data['1'][it]  
                        let second = data['2'][it] 
                        let third = data['3'][it]   
                        let fourth = data['4'][it]  
                        let sum = first == null || second == null || third == null || fourth == null ? " - " : Math.round((first+second+third+fourth)/4)
                        
                      
                        return(
                        <tr>
                            <td>{Subjects[index]}</td>
                            <td style={{backgroundColor:notesColor(first)}}>{first}</td>
                            <td style={{backgroundColor:notesColor(second)}}>{second}</td>
                            <td style={{backgroundColor:notesColor(third)}}>{third}</td>
                            <td style={{backgroundColor:notesColor(fourth)}}>{fourth}</td>
                            <td style={{backgroundColor:notesColor(sum)}}>{sum}</td>
                        </tr>
                        )
                    })}
                
                    </>
  


                )

                })}

            </tbody>

 
        </table>


        </div>        


    </div>
    )




}

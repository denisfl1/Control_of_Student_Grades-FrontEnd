"use client"

import React from "react";
import { useEffect, useState } from "react";
import {API} from "@/api/api"
import Header from "@/components/header";
import see from "@/imgs/user-list.png"
import Link from "next/link";
import background from "@/imgs/classroom.jpg"
import lupa from "@/imgs/lupa.png"

export default function studentsList(){

    const [students,setStudents] = useState<string[]>([])
    const [average,setAverage] = useState<string[]>()
    const key = ['name','surname','ra']
    const [search,setSearch] = useState<string[]>([])
    const filterNote = search[0] ? students.filter((data:any)=>key.find(keys=>data[keys].toLowerCase().includes(search) || data[keys].includes(search))) : average && typeof average[0] != 'undefined' ? average : students

    const notes=(type:string,student:any)=>{
    
        let sumport = 0
    
        let keys = ['português',
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
            'educação_física']
        for(let i in student['notes']){
     
        if(i != 'Média'){

            keys.forEach((data)=>{

                sumport += student['notes'][i][data] / 4
               
            })
          
        }
      
        }
        sumport = Math.round(sumport)/13
     
        if(type == 'color'){
        if( sumport >= 7 ) return "#32CD32"
        return "#FF0000"
    
        }else{
            if( sumport >= 7 )return "APROVADO"
            return "REPROVADO"
        }
     
    }

   
    useEffect(()=>{

        API.get('/getStudents').then(
            res=>{         
                setStudents(res.data)
                console.log(res.data)
            }
        )

    },[])


    let option = []

    for(let i= 0;i<=10;i++){
        option.push(i)
    }


    const selectFilterNote=(data:string[],target:any)=>{
        let arr:string[]= []

        data.map((it:any)=>{
        let sum = 0

            for(let i in it.notes){
               
            sum+= it.notes[i] / 13

            }
            sum = Math.round(sum)
            if(sum == target ){
             arr.push(it)    
            }
            
        })
      
        return setAverage(arr)
    
    }

   
    return(

        <div className="studentsContainer  h-screen w-full">

            <Header></Header>
            <img style={{zIndex:-1,position:'absolute'}} src={background.src}></img>
            <div className="studentsListContainer w-full mt-5" >
                <div className="flex h-20 w-9/12 m-auto bg-opacity-80 bg-white t-0 justify-around items-center" style={{borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}>
                <div className="containerInput"><input onChange={(e:any)=>setSearch(e.target.value)} placeholder="Nome ou RA" className="w-full" type="text"></input><img src={lupa.src}></img></div>
                <select onChange={(e:any)=>selectFilterNote(students,e.target.value)}>
                    <option>Notas</option>
                    {option.map((data)=>{
                    return(
                        <option key={data} value={data}>{data}</option>
                    )

                    })}
                  
                  
                </select>
                </div>
            <div className="studentsTable w-9/12 m-auto ">
            <table className=" w-full">
            <thead>

                <tr>
                    <th>RA</th>
                    <th>Nome</th>
                    <th>Sobrenome</th>            
                    <th className="text-center">Situação</th>
                    <th className="text-center">Todas</th>
                 
                </tr>

                    
            </thead>

            <tbody>
               
            {filterNote.map((student: any,index:number) => {
            const mat =  [

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
            notes('notes',student)
        
            return (
                
            <tr key={student.id}>
            <td>{student.ra}</td>    
            <td>{student.name}</td>
            <td>{student.surname}</td>
            <td className="text-center" style={{backgroundColor:notes('color',student),color:'white'}}>{notes('notes',student)}</td>
            <td><Link href='/home'><img className="w-8 m-auto" src={see.src}></img></Link></td>
         
        </tr>
      )})}
    
            </tbody>

 
            </table>
            </div>
            </div>

        </div>

    )


}




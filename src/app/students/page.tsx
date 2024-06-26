"use client"

import React, { useContext } from "react";
import { useEffect, useState } from "react";
import {API} from "@/api/api"
import Header from "@/components/header";
import see from "@/imgs/user-list.png"
import Link from "next/link";
import background from "@/imgs/classroom.jpg"
import lupa from "@/imgs/lupa.png"
import { AppContext } from "@/context";

export default function studentsList(){

    const [students,setStudents] = useState<string[]>([])
    const [average,setAverage] = useState<any>([])
    const key = ['name','surname','ra']
    const [search,setSearch] = useState<string[]>([])
    const filterNote = search[0] ? students.filter((data:any)=>key.find(keys=>data[keys].toLowerCase().includes(search) || data[keys].includes(search))) : average && typeof average[0] != 'undefined' ? average : students
    const {user} = useContext(AppContext)
    const [credential,setCredential] = useState<string>()
    const [RA,setRA] = useState<string>()

    useEffect(()=>{

    if(user){
    const cred = user.credential
    const ra = user.ra
    setCredential(cred)
    setRA(ra)
  

    }
    },[user])


    const keys = [
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
    'educação_física']

    const notes=(type:string,student:any)=>{
    
        let sum = 0
        let awaiting = false
    
   
        for(let i in student['notes']){
     
        if(i != 'Média'){

            keys.forEach((data)=>{

                sum += student['notes'][i][data] / 4
                
                if(student['notes'][i][data] == null){
                    awaiting  = true
                }


            })
          
        }
      
        }
        sum = Math.round(sum)/13
    
        if(type == 'color'){
            
            if(awaiting)return "#F4A460"
            if( sum >= 7 ) return "#32CD32"
            return "#FF0000"
    
        }else{
            
            if(awaiting)return  "PENDENTE"
            if( sum >= 7 )return "APROVADO"
            return "REPROVADO"
        }
     
    }

   
    useEffect(()=>{
  
        API.get('/getStudents').then(
            res=>{         
                setStudents(res.data)
               
            }
        )


    },[])



    const selectFilterNote=(data:string[],target:string)=>{
        let aproved:string[]= []
        let reproved:string[]= []
        let waiting:string[] = []

        data.forEach((it:any)=>{
        let sum:number = 0
        let void_note = false

            for(let i in it.notes){
            
            if(i != 'Média'){
             
                keys.forEach((x)=>{
                    sum+= it.notes[i][x] / 4

                    if(it.notes[i][x] == null){
                        void_note = true
                    }

                })
                
                
            }

            }
  
            sum = Math.round(sum)/13
     
     
            if(sum >= 7 && !void_note)return aproved.push(it)
            if(sum < 7 && !void_note) return reproved.push(it)  
            if(void_note) return  waiting.push(it)
      
        })
        
        if(target == "aprovado"){

           setAverage(aproved)

        }
        else if(target == "reprovado"){

           setAverage(reproved)

        }else if(target == "pendente"){

           setAverage(waiting)

        }else{
            setAverage([])
        }
       
       
    }

   
    return(

        <div className="studentsContainer  h-screen w-full">
            <Header></Header>
            <img style={{zIndex:-1,position:'absolute'}} src={background.src}></img>
            <div className="studentsListContainer w-full mt-5" >
                <div className="flex h-20 w-9/12 m-auto bg-opacity-80 bg-white t-0 justify-around items-center" style={{borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}>
                <div className="containerInput" style={{borderRadius:'15px',overflow:'hidden'}}><input onChange={(e:any)=>setSearch(e.target.value)} placeholder="Nome ou RA" className="w-full" type="text"></input><img src={lupa.src}></img></div>
                <select id="select_situations" onChange={(e:any)=>selectFilterNote(students,e.target.value)}>
        
                  <option>Todos</option>     
                  <option value={"aprovado"}>Aprovado</option>
                  <option value={"reprovado"}>Reprovado</option>
                  <option value={"pendente"}>Pendente</option>
           
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
                    <th className="text-center">Notas</th>
                 
                </tr>

                    
            </thead>

            <tbody>
               
            {filterNote.map((student: any) => {

            
            return (
                
            <tr key={student.id}>
            <td>{student.ra}</td>    
            <td>{student.name}</td>
            <td>{student.surname}</td>
            <td className="text-center" style={{backgroundColor:notes('color',student),color:'white'}}>{notes('notes',student)}</td>
           <td>{credential ?<Link href={`/allnotes/${student.ra}`}><img className="w-8 m-auto" src={see.src}></img></Link> : student.ra == RA &&<Link href={`/allnotes/${student.ra}`}><img className="w-8 m-auto" src={see.src}></img></Link>}</td>
         
        </tr>
      )})}
    
            </tbody>

 
            </table>
            </div>
            </div>

        </div>

    )


}




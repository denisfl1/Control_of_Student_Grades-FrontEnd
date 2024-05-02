"use client"

import React from "react";
import { useEffect, useState } from "react";
import {API} from "@/api/api"
import Header from "@/components/header";


export default function studentsList(){

    const [students,setStudents] = useState<string[]>([])

    useEffect(()=>{

        API.get('/getStudent').then(
            res=>{
                
                setStudents(res.data)
                console.log(res.data)
            }
        )


    },[])


    return(

        <div className="studentsContainer  h-screen w-full">

            <Header></Header>

            <div>
        {students.map((student: any) => (
            

            <ul>
                <li>
                    {student.name} {student.surname}
                </li>
            

            </ul>

      ))}
              
            </div>

        </div>

    )


}




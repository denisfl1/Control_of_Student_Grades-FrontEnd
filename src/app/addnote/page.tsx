"use client"

import AddNoteComp from "@/components/addNoteComp"
import SelectStudentTable from "@/components/selectStudentTable"
import Header from "@/components/header"
import background from "@/imgs/classroom.jpg"
import { useEffect, useState } from "react"
import {API} from "@/api/api"


export default function AddNotePage(){

    const [data,setData] = useState<any>([])

    useEffect(()=>{

        API.get("/getStudentToNote/123456").then(
            res=>{
                setData(res.data)
            },error=>{
                console.log(error)
            }
        )



    },[])


    return(

        <div className="addNotePageContainer">
            <Header></Header>
            <img className="loginIMG " style={{zIndex:-1,minHeight:"100vh"}} src={background.src}></img>
            <div className="background"></div>
            <div style={{display:'flex'}}>
            <SelectStudentTable data={data}></SelectStudentTable>
            <AddNoteComp  data={data} setData={setData}/>
            </div>

        </div>


    )


}
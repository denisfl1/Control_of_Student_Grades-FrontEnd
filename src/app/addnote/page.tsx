"use client"

import AddNoteComp from "@/components/addNoteComp"
import SelectStudentTable from "@/components/selectStudentTable"
import Header from "@/components/header"
import background from "@/imgs/classroom.jpg"
import { useEffect, useState } from "react"
import {API} from "@/api/api"
import NoteTable from "@/components/noteTable"


export default function AddNotePage(props:{data:any}){

    const [data,setData] = useState<any>([])
    const [ra,setRA]=  useState<any>(123456)

  

    return(

        <div className="addNotePageContainer">
            <Header></Header>
            <img className="loginIMG " style={{zIndex:-1,minHeight:"100vh"}} src={background.src}></img>
            <div className="background"></div>
            <div style={{display:'flex'}}>
            <SelectStudentTable setData={setData} setRA={setRA}></SelectStudentTable>
            <AddNoteComp  data={data} setData={setData}/>
            <NoteTable></NoteTable>
            </div>

        </div>


    )


}
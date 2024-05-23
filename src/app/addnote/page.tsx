"use client"

import AddNoteComp from "@/components/addNoteComp"
import SelectStudentTable from "@/components/selectStudentTable"
import Header from "@/components/header"
import background from "@/imgs/classroom.jpg"
import { useEffect, useState } from "react"
import {API} from "@/api/api"
import NoteTable from "@/components/noteTable"


export default function AddNotePage(props:{data:any}){

    const [data,setData] = useState<any>()
    const [ra,setRA]=  useState<any>()

  

    return(

        <div className="addNotePageContainer" style={{height:'100vh'}}>
            <Header></Header>
            <img className="loginIMG " style={{zIndex:-1,minHeight:"100%"}} src={background.src}></img>
            <div className="background"></div>
            <div style={{display:'flex',justifyContent:'space-around',marginTop:'20px',height:'100%'}}>
            <SelectStudentTable setData={setData} setRA={setRA}></SelectStudentTable>
            <AddNoteComp  data={data} setData={setData}/>
            <NoteTable data={data}></NoteTable>    
            </div>
           
        </div>


    )


}
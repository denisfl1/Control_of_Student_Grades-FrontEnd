
"use client"

import { useEffect, useState } from "react"
import {API} from "@/api/api"

export default function AddNoteComp(props:{data:any}){

    const [name,setName] = useState<any>([])
    const [Actual_Note,setActual_Note] = useState<number|string[]>([])
    const [ra,setStudent_RA] = useState<string[]>(['123456'])
    const [note,setNote] = useState<Number>()
    const [two_months,setTwo_months] = useState<string>('1')
 

    useEffect(()=>{

    const data_name = props.data.name
    const data_surname = props.data.surname
    const data_ra = props.data.ra
    let data_note = ''
    const fullname = `${data_name} ${data_surname}`

    setName(fullname)
    setStudent_RA(data_ra)

    for(let i in props.data.notes){
 
        if(i != 'Média'){
            data_note = props.data.notes[two_months]['português']

            if(data_note == null){
                setActual_Note([''])
            }else{
                setActual_Note([data_note])
            }
           
        }
    }



    },[props.data,two_months])


    const sendData=()=>{
      
        API.post('/addnote',{ra,note,two_months}).then(
            res=>{
                console.log(res.data)
            },error=>{
                console.log(error)
            }
        )


    }


return(

    <div className="addNoteSubContainer">

        <div className="addNoteContent">

            <label>Nome</label>
            <input value={name}></input>
            
            <label>RA</label>
            <input value={ra}></input>
            
            <label>Nota Atual</label>
            <input value={Actual_Note} disabled style={{backgroundColor:"white",textAlign:'center'}}></input>
     

            <label>Digite uma Nota</label>
            <input onChange={(e:any)=>setNote(e.target.value)} style={{textAlign:'center'}} type="text"></input>


            <select onChange={(e:any)=>setTwo_months(e.target.value)}>
                <option value={'1'}>Primeiro Bimestre</option>
                <option value={'2'}>Segundo Bimestre</option>
                <option value={'3'}>Terceiro Bimestre</option>
                <option value={'4'}>Quarto Bimestre</option>
            </select>


            <div style={{display:'flex',marginTop:'20px'}}>
               <button className="clearButton">LIMPAR</button>
               <button onClick={sendData} className="saveButton">SALVAR</button>
            </div>

        </div>


    </div>

)


}
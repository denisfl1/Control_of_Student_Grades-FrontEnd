
"use client"

import { useEffect, useState } from "react"

interface DataType{
    data:{
        name:string
    }
    
}

    
        
    



export default function AddNoteComp(props:{data:DataType}){




    const [name,setName] = useState<string[]>([])
    const [Actual_Note,setActual_Note] = useState<number|string[]>(['8,5'])
    const [Student_RA,setStudent_RA] = useState<string[]>(['123456'])
    const [note,setNote] = useState<Number>()
    const [two_months,setTwo_months] = useState<string[]>([])
 

    useEffect(()=>{


    },[props.data])


  


return(

    <div className="addNoteSubContainer">

        <div className="addNoteContent">

            <label>Nome</label>
            <input value={name}></input>
            
            <label>RA</label>
            <input value={Student_RA}></input>
            
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
               <button className="saveButton">SALVAR</button>
            </div>

        </div>


    </div>

)


}
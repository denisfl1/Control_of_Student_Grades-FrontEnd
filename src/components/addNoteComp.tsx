
"use client"

import { useEffect, useState } from "react"
import {API} from "@/api/api"

export default function AddNoteComp(props:{data:any,setData:React.Dispatch<React.SetStateAction<string[]>>}){

    const [name,setName] = useState<any>([])
    const [Actual_Note,setActual_Note] = useState<string|number>()
    const [ra,setStudent_RA] = useState<string[]>([])
    const [note,setNote] = useState<any>()
    const [two_months,setTwo_months] = useState<string>('1')
    

    useEffect(()=>{
        
        let data_name = ''
        let data_surname = ''
        let data_ra = ''
        let discipline = ''
        let data_note = ''
        const data = props.data
     
    for(let i in data){
        data_name = data['name']
        data_surname = data['surname']
        data_ra = data['ra']
        discipline = data['discipline']
 
     

        if(two_months != 'Média'){
            data_note = data.notes[two_months][discipline]

            if(data_note == '' || data_note == null){
               setActual_Note("Aguardando Nota...")
            }else{
               setActual_Note(data_note)
            }
           
        }
    }
    const fullname = `${data_name} ${data_surname}`
    setName(fullname)
    setStudent_RA([data_ra])


    },[props.data,two_months])



    const sendData = async()=>{
        
        
        let convert = note == '' ? null : Number(note)

       await API.post('/addnote',{ra,convert,two_months}).then(
            res=>{
          
                if(res.status == 200){
                 props.setData((prevState:any)=>{
                    return {
                        ...prevState,
                        notes:{...prevState.notes,
                        [two_months]:{...prevState.notes[two_months],
                        [prevState.discipline]:note}}
                      
                        }
                 })
            
                  alert(res.data)
                }
                   
            },error=>{
                console.log(error)
                alert(error.response.data)
            }
        )


    }

    const handleClear = ()=>{
        
        setNote('')
        setActual_Note("Aguardando Nota...")
    }


return(

    <div className="addNoteSubContainer">

        <div className="addNoteContent">

            <label>Nome</label>
            <input disabled value={name}></input>
            
            <label>RA</label>
            <input disabled value={ra}></input>
            
            <label>Nota Atual</label>
            <input value={Actual_Note} disabled style={{backgroundColor:"white",textAlign:'center',fontSize:Actual_Note == "Aguardando Nota..." ? '18px': ''}}></input>
     

            <label>Digite uma Nota</label>
            <input value={note} onChange={(event)=>{
                let value = event.target.value
                event.target.value = value.replace(/[^\d.]/g,'')
                setNote(event.target.value)
            }} style={{textAlign:'center'}} ></input>


            <select onChange={(e:any)=>setTwo_months(e.target.value)}>
                <option value={'1'}>Primeiro Bimestre</option>
                <option value={'2'}>Segundo Bimestre</option>
                <option value={'3'}>Terceiro Bimestre</option>
                <option value={'4'}>Quarto Bimestre</option>
            </select>


            <div style={{display:'flex',marginTop:'20px'}}>
               <button onClick={handleClear} className="clearButton">LIMPAR</button>
               <button onClick={sendData} className="saveButton">SALVAR</button>
            </div>

        </div>


    </div>

)


}
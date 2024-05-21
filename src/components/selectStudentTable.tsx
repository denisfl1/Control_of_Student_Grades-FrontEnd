import { useEffect, useState } from "react"
import {API} from "@/api/api"


export default function SelectStudentTable(props:{setData:React.Dispatch<React.SetStateAction<string[]>>,
    setRA:React.Dispatch<React.SetStateAction<string>>}){

        const[allStudents,setAllStudents] = useState<string[]>()
        const [DiscDiscipline,setDiscDiscipline] = useState<string>()

        useEffect(()=>{

            API.get('/getStudentToNote').then(
                res=>{ 
                    const DATAs = res.data.alumn
                    const Disc = res.data['discipline']
                 
                    setAllStudents(DATAs)
                    setDiscDiscipline(Disc)
                   
                }
            )
    
        },[])
        


return(

    <div>
       <div><input style={{width:"100%"}}></input></div> 
    <table style={{
        width:"480px"
    }}>

        <thead>
            <tr>
            <th>Nome</th>
            <th>RA</th>
            <th>Selecionar</th>
            </tr>
        </thead>


        <tbody>

            {allStudents?.map((it:any)=>{
                const fullname = `${it.name} ${it.surname}`

                      
                return(
                    <tr>
                    <td>{fullname}</td>
                    <td>{it.ra}</td>
                    <td><button onClick={()=>props.setData(
                       { ...it,
                        discipline:DiscDiscipline
                       }
                        
                        )}>Selecionar</button></td>
    
                </tr>
    

                )
            })}
         
          



        </tbody>


    </table>
    </div>


)



}
import { useEffect, useState } from "react"
import {API} from "@/api/api"


export default function SelectStudentTable(props:{setData:React.Dispatch<React.SetStateAction<string[]>>,
    setRA:React.Dispatch<React.SetStateAction<string>>}){

        const[allStudents,setAllStudents] = useState<string[]>()
        const[DiscDiscipline,setDiscDiscipline] = useState<string>()
        const[SELECT,setSelect] = useState<string>()
        const keys = ['name','surname']
        const search = SELECT ? allStudents?.filter((data:any)=>keys.find(key=>data[key].toLowerCase().includes(SELECT)||
        data[key].includes(SELECT))):allStudents

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

    <div className="SelectStudentContainer overflow-x-auto overflow-y-scroll" style={{height:'650px'}}>
       <div className="flex overflow-hidden "><input style={{width:"100%",height:'40px',paddingLeft:'10px',border:'none'}}></input><button  style={{backgroundColor:'rgb(0, 64, 98)',color:'white',width:'150px',borderRight:'1px solid white'}}>Pesquisar</button></div> 
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

            {search?.map((it:any)=>{
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
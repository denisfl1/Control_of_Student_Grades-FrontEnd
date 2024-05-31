import { useEffect, useState } from "react"
import {API} from "@/api/api"


export default function SelectStudentTable(props:{setData:React.Dispatch<React.SetStateAction<string[]>>,
    setRA:React.Dispatch<React.SetStateAction<string>>}){

        const[allStudents,setAllStudents] = useState<string[]>()
        const[DiscDiscipline,setDiscDiscipline] = useState<string>()
        const[SELECT,setSelect] = useState<string>()
        const [inputSearch,setInputSearch] = useState<string>()
        const keys = ['fullname']
        const search =  typeof SELECT !== 'undefined'  ? allStudents?.filter((data:any)=>keys.find(key=>data[key].toLowerCase().includes(SELECT)||
        data[key].includes(SELECT))):allStudents

        useEffect(()=>{

            API.get('/getStudentToNote').then(
                res=>{ 
                    const DATAs = res.data.alumn
                    const Disc = res.data['discipline']
                 
                    setAllStudents(DATAs.map((it:any)=>{
                        const fullname = `${it.name} ${it.surname}`
                        return{...it,
                            fullname:fullname

                        }
                    }))
                    setDiscDiscipline(Disc)
                    
                }
                
            )
        
        },[])

        const handleClick =()=>{

            setSelect(inputSearch)


        }

        useEffect(()=>{

            if(inputSearch == ''){
                setSelect('')
            }

        },[inputSearch])

return(

    <div className="SelectStudentContainer overflow-x-hidden overflow-y-auto" style={{height:'650px'}}>
       <div className="flex overflow-hidden"><input onChange={(e:any)=>setInputSearch(e.target.value)} style={{width:"100%",height:'40px',paddingLeft:'10px',border:'none'}}></input><button onClick={handleClick}  style={{backgroundColor:'rgb(0, 64, 98)',color:'white',width:'150px',borderRight:'1px solid white'}}>Pesquisar</button></div> 
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
                    <td><button className="selectStudentButton" onClick={()=>props.setData(
                       { ...it,
                        discipline:DiscDiscipline
                       }
                        
                        )}>selecionar</button></td>
    
                </tr>
    

                )
            })}
         
          



        </tbody>


    </table>
    </div>


)



}
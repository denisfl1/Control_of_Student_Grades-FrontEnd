import { useEffect, useState } from "react"

export default function NoteTable(props:{data:any}){



    const [studentDATA,setStudentDATA] = useState<any>()

    // const [verify,setVerify] = useState()
    // const [disc,setDisc ]= useState()
    // const [first,setFirst]= useState()
    // const [second,setSecond]= useState()
    // const [third,setThird] = useState()
    // const [fourth,setFourth] = useState()
    // const [total,setTotal] = useState()

    let disc =  ' '
    let first:any =  ''
    let second:any =  ''
    let third:any =  ''
    let fourth:any = ''
    let total:any = null

    const subjects = [
        'Primeiro',
        'Segundo',
        'Terceiro',
        'Quarto',
        'Média'

    ]


    useEffect(()=>{
        
  

    },[props.data])





return(

    <div>
        
        <table className="tableNotes_toAdd ">

            <thead>
                <tr>
                    <th>
                        Bimestre
                    </th>

                    <th>
                        Nota
                    </th>

                </tr>
            </thead>

            <tbody>
                {subjects.map((it:any,index:number)=>{
                          const verify = props.data
                           disc = verify ? props.data.discipline : ' '
                           first = verify ? props.data.notes['1'][disc] : ''
                           second = verify ?props.data.notes['2'][disc] : ''
                           third = verify ? props.data.notes['3'][disc] : ''
                           fourth = verify ? props.data.notes['4'][disc] : ''
                           total = verify ? Math.round((first + second + third + fourth) / 4) : ''
                           const all = [first,second,third,fourth,total]
                
                    return(

                        <>
                        <tr>
                            <td>{it}</td>                       
                            <td>{all[index]}</td>
                          
                        </tr>
                        </>
                   
                    )

                })}
         
                

            </tbody>

          
        </table>



    </div>



)



}
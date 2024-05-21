import { useEffect, useState } from "react"

export default function NoteTable(props:{data:any}){



    const [studentDATA,setStudentDATA] = useState<any>()

    let disc:any =  ''
    let first:any =  ''
    let second:any =  ''
    let third:any =  ''
    let fourth:any = ''
    let total:any = ''

    const subjects = [
        'Primeiro',
        'Segundo',
        'Terceiro',
        'Quarto',
        'Média'

    ]


    const verify = props.data
    disc = verify ? props.data.discipline : ''
    first = verify ? props.data.notes['1'][disc] : ''
    second = verify ?props.data.notes['2'][disc] : ''
    third = verify ? props.data.notes['3'][disc] : ''
    fourth = verify ? props.data.notes['4'][disc] : ''
    total = Math.round((first + second + third + fourth) / 4)
    const all = [first,second,third,fourth,total]


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
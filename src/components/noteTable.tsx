export default function NoteTable(props:{data:any}){

    const subjects = [
        'Primeiro',
        'Segundo',
        'Terceiro',
        'Quarto',
        'Média'

    ]


    const verify = props.data
    const disc = verify && props.data.discipline
    const first = verify && parseFloat(props.data.notes['1'][disc]) 
    const second = verify && parseFloat(props.data.notes['2'][disc]) 
    const third = verify && parseFloat(props.data.notes['3'][disc]) 
    const fourth = verify && parseFloat(props.data.notes['4'][disc]) 
    const total = verify && Math.round((first + second + third + fourth) / 4) 
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
                {subjects.map((it:string,index:number)=>{
                                              
                    return(
                        <>
                        <tr>
                            <td>{it}</td>                       
                            <td style={{fontSize:'25px'}}>{all[index]}</td>                      
                        </tr>
                        </>                 
                    )

                })}
         
                

            </tbody>

          
        </table>



    </div>



)



}
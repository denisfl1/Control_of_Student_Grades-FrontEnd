



export default function NoteTable(){

    const subjects = [

        'Segundo',
        'Terceiro',
        'Quarto',
        'Média'

    ]


return(

    <div>
        
        <table>

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
                {subjects.map((it:any)=>{

                    return(
                        <tr>
                              <td>{it}</td>
                              <td style={{textAlign:'center',width:"100px"}}>{'1'}</td>
                        </tr>
                    )

                })}
         


            </tbody>

            <div></div>
        </table>



    </div>



)



}
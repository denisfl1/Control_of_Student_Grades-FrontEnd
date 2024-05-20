



export default function NoteTable(){

    const subjects = [

        'Segundo Bimestre',
        'Terceiro Bimestre',
        'Quarto Bimestre',

    ]


return(

    <div>
        
        <table>

            <thead>
                <tr>
                    <th>
                Bimestres
                    </th>
                </tr>
            </thead>

            <tbody>
                {subjects.map((it:any)=>{

                    return(
                        <tr>
                              <td>{it}</td>
                              <td>{1}</td>
                        </tr>
                    )

                })}
         


            </tbody>


        </table>



    </div>



)



}
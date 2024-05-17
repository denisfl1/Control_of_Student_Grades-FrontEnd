


export default function SelectStudentTable(props:{data:any}){

    


return(

    <div>
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

            <tr>
                <td>Denis</td>
                <td>123455</td>
                <td><button>Selecionar</button></td>

            </tr>

            <tr>
                <td>Denis</td>
                <td>123455</td>
                <td><button>Selecionar</button></td>

            </tr>



        </tbody>


    </table>
    </div>


)



}
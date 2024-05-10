
"use client"

export default function AddStudendComp(){

return(
    <div className="addStudentCompContainer">

        <div className="addStudentComp flex" style={{
            flexDirection:"column"
        }}>


            <label>Nome</label>
            <input placeholder="Nome" type="text"></input>
    
            <label>Sobrenome</label>
            <input placeholder="Sobrenome" type="text"></input>
         
            <label>RA</label>
            <input placeholder="RA" type="text"></input>

            <button>ENVIAR</button>
        </div>
            

       

    </div>
)


}
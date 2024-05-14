



export default function AddNoteComp(){

let notesVal = []


    for(let i=0;i<=10;i++){
        notesVal.push(i)
    }




return(

    <div className="addNoteSubContainer">

        <div className="addNoteContent">

            <label>Nome</label>
            <input value={'Denis Ferreira'}></input>
            
            <label>RA</label>
            <input value={'1232424'}></input>
            
            <label>Nota Atual</label>
            <input value={'8,5'} disabled style={{backgroundColor:"white",textAlign:'center'}}></input>
     

            <label>Digite uma Nota</label>
            <input style={{textAlign:'center'}} type="text"></input>


            <select>
                <option>Primeiro Bimestre</option>
                <option>Segundo Bimestre</option>
                <option>Terceiro Bimestre</option>
                <option>Quarto Bimestre</option>
            </select>


            <div style={{display:'flex',marginTop:'20px'}}>
               <button className="clearButton">LIMPAR</button>
               <button className="saveButton">SALVAR</button>
            </div>

        </div>


    </div>

)


}
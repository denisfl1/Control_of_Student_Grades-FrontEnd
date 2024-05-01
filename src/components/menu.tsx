
import arrow from "@/imgs/left-arrow.png"


export default function Menu(){


    return(

        <div className="ContainerMenu ">

            <ul>
                <li>Alunos <img className="mr-8 h-8" src={arrow.src}></img></li>
                <li>Adicionar Aluno <img className="mr-8 h-8" src={arrow.src}></img></li>
                <li>Adicionar Nota <img className="mr-8 h-8" src={arrow.src}></img></li>
                <li>Ver Notas <img className="mr-8 h-8" src={arrow.src}></img></li>
                <li>Resultado Final <img className="mr-8 h-8" src={arrow.src}></img></li>


            </ul>


        </div>

    )

}
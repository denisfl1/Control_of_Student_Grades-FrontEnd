
import arrow from "@/imgs/left-arrow.png"
import Link from "next/link"

export default function Menu(){


    return(

        <div className="ContainerMenu ">

            <ul>
                <li>Alunos <Link href={'/students'}><img className="mr-8 h-8" src={arrow.src}></img></Link></li>
                <li>Adicionar Aluno <Link href={'/addstudent'}> <img className="mr-8 h-8" src={arrow.src}></img></Link></li>
                <li>Adicionar Nota <Link href={'/addnote'}> <img className="mr-8 h-8" src={arrow.src}></img></Link></li>
                <li>Ver Notas <Link href={'/students'}> <img className="mr-8 h-8" src={arrow.src}></img></Link></li>
                <li>Resultado Final <Link href={'/students'}> <img className="mr-8 h-8" src={arrow.src}></img></Link></li>


            </ul>


        </div>

    )

}
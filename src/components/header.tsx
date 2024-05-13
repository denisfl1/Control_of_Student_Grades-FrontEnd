
"use client"

import { useAppContext } from "@/context"
import home from "@/imgs/home.png"
import Link from "next/link"


export default function Header(){
    const {Authenticated,token,logout} = useAppContext()

    console.log(token)

return(


    <div className="flex justify-between items-center bg-gray-100 h-[100px]">
        <div style={{marginLeft:"30px"}}><Link href={'/'}><img style={{width:"64px"}} src={home.src}></img></Link></div>

        <button onClick={()=>logout}  className="LogoutButton">

            Sair

        </button>
    </div>

)

}
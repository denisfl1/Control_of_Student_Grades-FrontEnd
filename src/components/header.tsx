
"use client"

import { AppContext } from "@/context/index"
import home from "@/imgs/home.png"
import Link from "next/link"
import { useContext } from "react"


export default function Header(){
    
    const {Logout} = useContext(AppContext)

    

return(


    <div className="flex justify-between items-center bg-gray-100 h-[100px]">
        <div style={{marginLeft:"30px"}}><Link href={'/'}><img style={{width:"64px"}} src={home.src}></img></Link></div>

        <button onClick={Logout}  className="LogoutButton">

            Sair

        </button>
    </div>

)

}

"use client"

import home from "@/imgs/home.png"
import Link from "next/link"

export default function Header(){



return(


    <div className="flex justify-between items-center bg-gray-100 h-[100px]">
        <div style={{marginLeft:"30px"}}><Link href={'/'}><img style={{width:"64px"}} src={home.src}></img></Link></div>

        <button className="LogoutButton">

            Sair

        </button>
    </div>

)

}
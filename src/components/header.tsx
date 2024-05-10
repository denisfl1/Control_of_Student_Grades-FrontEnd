
"use client"

import home from "@/imgs/home.png"

export default function Header(){



return(


    <div className="flex justify-between items-center bg-gray-100 h-[100px]">
        <div style={{marginLeft:"30px"}}><img style={{width:"64px"}} src={home.src}></img></div>

        <ul>

            <li className="mr-20 cursor-pointer">
                Sair
            </li>

        </ul>
    </div>

)

}